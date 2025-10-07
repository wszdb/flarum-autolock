# 修复说明 - v2.0.1

## 问题描述
扩展在论坛前端初始化时报错：
```
TypeError: Cannot read properties of undefined (reading 'attribute')
```

## 问题原因
`forum.js` 中尝试调用 `app.forum.attribute()` 读取设置，但：
1. 这些设置没有通过 `serializeToForum()` 序列化到前端
2. 论坛前端实际上不需要读取这些设置
3. 所有业务逻辑都在后端 PHP 的 `PostedListener` 中处理

## 修复内容

### 1. forum.js
**修改前：**
```javascript
const enabled = o().forum.attribute("wszdb-autolock.enabled");
const threshold = o().forum.attribute("wszdb-autolock.threshold");
```

**修改后：**
```javascript
// 移除了 attribute 调用，只保留简单初始化
console.log("[Auto Lock] Extension loaded in forum");
```

### 2. extend.php
**修改前：**
```php
(new Extend\Settings())
    ->default('wszdb-autolock.enabled', true)
    ->default('wszdb-autolock.threshold', 100)
    ->serializeToForum('wszdb-autolock.enabled', 'wszdb-autolock.enabled', 'boolval')
    ->serializeToForum('wszdb-autolock.threshold', 'wszdb-autolock.threshold', 'intval'),
```

**修改后：**
```php
(new Extend\Settings())
    ->default('wszdb-autolock.enabled', true)
    ->default('wszdb-autolock.threshold', 100),
// 移除了 serializeToForum，因为前端不需要这些设置
```

## 验证步骤

1. 清除缓存：
```bash
php flarum cache:clear
php flarum assets:publish
```

2. 刷新浏览器（Ctrl+Shift+R 强制刷新）

3. 检查：
   - ✅ 扩展能正常启用
   - ✅ 管理面板能打开设置
   - ✅ 不再报 "初始化失败" 错误
   - ✅ 功能正常工作

## 技术说明

### 为什么移除 serializeToForum？
- **后端处理**：自动锁定逻辑完全在 `PostedListener.php` 中执行
- **前端无需**：论坛用户界面不需要知道这些设置
- **管理面板**：管理员设置通过 `admin.js` 的 `extensionData.registerSetting()` 实现

### 设置的使用位置
- ✅ **后端读取**：`PostedListener.php` 通过 `$this->settings->get()` 读取
- ✅ **管理面板**：`admin.js` 通过 `registerSetting()` 注册设置表单
- ❌ **前端不读取**：`forum.js` 不需要访问这些设置

## 发布新版本

```bash
git add .
git commit -m "Fix: Remove app.forum.attribute call in forum.js (v2.0.1)"
git tag -a v2.0.1 -m "Fix forum initialization error"
git push origin main
git push origin v2.0.1
```

---
生成时间: 2025-10-07
修复版本: v2.0.1
