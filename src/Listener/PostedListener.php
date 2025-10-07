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
        $post = $event->post;
        
        // 使用 PSR-3 Logger 而不是 Facade
        $this->logger->info('[Auto Lock] ========================================');
        $this->logger->info('[Auto Lock] EVENT TRIGGERED!!!');
        $this->logger->info('[Auto Lock] ========================================');
        
        $this->logger->info('[Auto Lock] Discussion Info', [
            'id' => $discussion->id,
            'title' => $discussion->title,
            'post_count' => $discussion->post_number_index,
            'is_locked' => $discussion->is_locked,
        ]);

        // 检查扩展是否启用
        $enabled = $this->settings->get('wszdb-autolock.enabled');
        $enabledBool = filter_var($enabled, FILTER_VALIDATE_BOOLEAN);
        
        $this->logger->info('[Auto Lock] Settings Check', [
            'enabled_raw' => $enabled,
            'enabled_bool' => $enabledBool,
        ]);
        
        if (!$enabledBool) {
            $this->logger->warning('[Auto Lock] Extension is DISABLED');
            return;
        }

        // 获取阈值
        $threshold = (int) $this->settings->get('wszdb-autolock.threshold', 100);
        
        $this->logger->info('[Auto Lock] Threshold Check', [
            'threshold' => $threshold,
            'current_count' => $discussion->post_number_index,
        ]);

        if ($threshold < 1) {
            $this->logger->error('[Auto Lock] Invalid threshold', ['value' => $threshold]);
            return;
        }

        // 检查是否已锁定
        if ($discussion->is_locked) {
            $this->logger->info('[Auto Lock] Already locked, skipping');
            return;
        }

        // 检查是否达到阈值
        $postCount = $discussion->post_number_index;
        
        $this->logger->info('[Auto Lock] Final Check', [
            'post_count' => $postCount,
            'threshold' => $threshold,
            'should_lock' => $postCount >= $threshold,
        ]);

        if ($postCount >= $threshold) {
            try {
                $discussion->is_locked = true;
                $discussion->save();
                
                $this->logger->info('[Auto Lock] ========================================');
                $this->logger->info('[Auto Lock] ✅ DISCUSSION LOCKED SUCCESSFULLY!');
                $this->logger->info('[Auto Lock] ========================================');
                $this->logger->info('[Auto Lock] Lock Details', [
                    'discussion_id' => $discussion->id,
                    'discussion_title' => $discussion->title,
                    'final_count' => $postCount,
                    'threshold' => $threshold,
                ]);
            } catch (\Exception $e) {
                $this->logger->error('[Auto Lock] Failed to lock discussion', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                ]);
            }
        } else {
            $this->logger->debug('[Auto Lock] Not reached threshold yet', [
                'current' => $postCount,
                'threshold' => $threshold,
                'remaining' => $threshold - $postCount,
            ]);
        }
        
        $this->logger->info('[Auto Lock] Handler completed');
    }
}