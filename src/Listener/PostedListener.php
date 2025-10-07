<?php

namespace Wszdb\AutoLock\Listener;

use Flarum\Post\Event\Posted;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class PostedListener
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * 处理帖子发布事件
     *
     * @param Posted $event
     */
    public function handle(Posted $event)
    {
        // 检查扩展是否启用
        $enabled = (bool) $this->settings->get('wszdb-autolock.enabled', true);
        if (!$enabled) {
            return;
        }

        // 获取阈值设置
        $threshold = (int) $this->settings->get('wszdb-autolock.threshold', 100);
        if ($threshold < 1) {
            return;
        }

        // 获取讨论对象
        $discussion = $event->post->discussion;

        // 如果讨论已经被锁定，跳过
        if ($discussion->is_locked) {
            return;
        }

        // 获取当前讨论的帖子总数
        $postCount = $discussion->post_number_index;

        // 检查是否达到阈值
        if ($postCount >= $threshold) {
            // 锁定讨论
            $discussion->is_locked = true;
            $discussion->save();

            // 可选：记录日志
            // Log::info("Discussion #{$discussion->id} auto-locked at {$postCount} posts");
        }
    }
}
