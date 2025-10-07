<?php

namespace Wszdb\AutoLock;

use Flarum\Extend;
use Flarum\Post\Event\Posted;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Event())
        ->listen(Posted::class, Listener\LockDiscussionOnPostCount::class),

    (new Extend\Settings())
        ->serializeToForum('wszdb-autolock.post_threshold', 'wszdb-autolock.post_threshold', 'intval', 100)
        ->serializeToForum('wszdb-autolock.enabled', 'wszdb-autolock.enabled', 'boolval', true),
];