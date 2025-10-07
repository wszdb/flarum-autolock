<?php

namespace Wszdb\AutoLock\Listener;

use Flarum\Post\Event\Posted;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LockDiscussionOnPostCount
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Posted $event)
    {
        // Check if auto-lock is enabled
        $enabled = (bool) $this->settings->get('wszdb-autolock.enabled', true);
        if (!$enabled) {
            return;
        }

        $discussion = $event->post->discussion;
        
        // Skip if discussion is already locked
        if ($discussion->is_locked) {
            return;
        }

        // Get the post threshold from settings
        $threshold = (int) $this->settings->get('wszdb-autolock.post_threshold', 100);

        // Count total posts in the discussion
        $postCount = $discussion->post_number_index;

        // Lock the discussion if threshold is reached
        if ($postCount >= $threshold) {
            $discussion->is_locked = true;
            $discussion->save();

            // Optionally, you can dispatch an event or log this action
            // event(new DiscussionWasLocked($discussion));
        }
    }
}