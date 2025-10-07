<?php

namespace Wszdb\AutoLock;

use Flarum\Extend;
use Flarum\Post\Event\Posted;

return [
    // 前端资源注册
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    // 语言包
    new Extend\Locales(__DIR__.'/locale'),

    // 事件监听 - 监听帖子发布事件
    (new Extend\Event())
        ->listen(Posted::class, Listener\PostedListener::class),
    
    // 设置默认值并序列化到前端
    (new Extend\Settings())
        ->default('wszdb-autolock.enabled', true)
        ->default('wszdb-autolock.threshold', 100)
        ->serializeToForum('wszdb-autolock.enabled', 'wszdb-autolock.enabled', 'boolval')
        ->serializeToForum('wszdb-autolock.threshold', 'wszdb-autolock.threshold', 'intval'),
];
