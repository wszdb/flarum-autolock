<?php

namespace Wszdb\AutoLock\Listener;

use Flarum\Post\Event\Posted;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Log\LoggerInterface;

class PostedListener
{
    protected $settings;
    protected $logger;

    public function __construct(
        SettingsRepositoryInterface $settings,
        LoggerInterface $logger
    ) {
        $this->settings = $settings;
        $this->logger = $logger;
    }

    public function handle(Posted $event)
    {
        $discussion = $event->post->discussion;
        
        // 刷新讨论数据以获取最新状态
        $discussion->refresh();
        
        // 计算总楼层数：comment_count（回复数）+ 1（主题帖）
        $totalPosts = $discussion->comment_count + 1;
        
        $this->logger->info('[Auto Lock] Event triggered', [
            'discussion_id' => $discussion->id,
            'title' => $discussion->title,
            'comment_count' => $discussion->comment_count,
            'total_posts' => $totalPosts,
        ]);

        // 检查扩展是否启用
        $enabled = $this->settings->get('wszdb-autolock.enabled');
        $enabledBool = filter_var($enabled, FILTER_VALIDATE_BOOLEAN);
        
        if (!$enabledBool) {
            $this->logger->info('[Auto Lock] Extension is disabled, skipping');
            return;
        }

        // 获取豁免标签列表
        $exemptTagsJson = $this->settings->get('wszdb-autolock.exempt_tags', '[]');
        $exemptTags = json_decode($exemptTagsJson, true) ?: [];
        
        // 检查当前讨论是否有豁免标签
        if (!empty($exemptTags)) {
            $discussionTags = $discussion->tags()->pluck('id')->toArray();
            
            $this->logger->info('[Auto Lock] Checking exempt tags', [
                'discussion_tags' => $discussionTags,
                'exempt_tags' => $exemptTags,
            ]);
            
            // 如果讨论的任一标签在豁免列表中，跳过锁定
            foreach ($discussionTags as $tagId) {
                if (in_array($tagId, $exemptTags)) {
                    $this->logger->info('[Auto Lock] Discussion has exempt tag, skipping', [
                        'discussion_id' => $discussion->id,
                        'exempt_tag_id' => $tagId,
                    ]);
                    return;
                }
            }
        }

        // 获取阈值设置
        $threshold = (int) $this->settings->get('wszdb-autolock.threshold', 100);
        
        $this->logger->info('[Auto Lock] Threshold check', [
            'threshold' => $threshold,
            'total_posts' => $totalPosts,
            'will_lock' => $totalPosts >= $threshold,
        ]);

        if ($threshold < 1) {
            $this->logger->warning('[Auto Lock] Invalid threshold value', ['threshold' => $threshold]);
            return;
        }

        // 如果讨论已经被锁定，跳过
        if ($discussion->is_locked) {
            $this->logger->info('[Auto Lock] Discussion already locked, skipping');
            return;
        }

        // 检查是否达到阈值
        if ($totalPosts >= $threshold) {
            try {
                $discussion->is_locked = true;
                $discussion->save();
                
                $this->logger->info('[Auto Lock] Discussion locked successfully', [
                    'discussion_id' => $discussion->id,
                    'discussion_title' => $discussion->title,
                    'total_posts' => $totalPosts,
                    'threshold' => $threshold,
                ]);
            } catch (\Exception $e) {
                $this->logger->error('[Auto Lock] Failed to lock discussion', [
                    'error' => $e->getMessage(),
                    'discussion_id' => $discussion->id,
                ]);
            }
        } else {
            $this->logger->debug('[Auto Lock] Threshold not reached', [
                'current_posts' => $totalPosts,
                'threshold' => $threshold,
                'remaining' => $threshold - $totalPosts,
            ]);
        }
    }
}