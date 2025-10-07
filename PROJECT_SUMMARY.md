# Flarum Auto Lock Extension - 项目摘要

## 项目信息
- **扩展名称**: Auto Lock
- **包名**: wszdb/flarum-autolock
- **版本**: 1.0.0
- **Flarum 版本**: ^1.8.0
- **PHP 版本**: ^8.2

## 功能特性
- ✅ 自动锁定达到指定楼层数的讨论
- ✅ 管理面板可配置启用/禁用和阈值
- ✅ 多语言支持（英文、简体中文）
- ✅ 事件驱动架构

## 文件清单
总计 17 个文件

### 核心文件
- composer.json - Composer 包配置
- extend.php - Flarum 扩展注册
- LICENSE - MIT 开源协议

### PHP 代码
- src/Listener/PostedListener.php - 事件监听器

### JavaScript 文件
- js/dist/admin.js - 管理面板（webpack IIFE 格式）
- js/dist/forum.js - 论坛前端（webpack IIFE 格式）
- js/src/admin/index.ts - TypeScript 源文件（可选）
- js/src/forum/index.ts - TypeScript 源文件（可选）

### 语言文件
- locale/en.yml - 英文翻译
- locale/zh-Hans.yml - 简体中文翻译

### 文档
- README.md - 项目说明
- QUICKSTART.md - 快速开始
- CONTRIBUTING.md - 贡献指南
- PUBLISH.md - 发布指南
- CHANGELOG.md - 版本日志

### CI/CD
- .github/workflows/build.yml - GitHub Actions 配置

## 安装方法
```bash
composer require wszdb/flarum-autolock
php flarum extension:enable wszdb-autolock
php flarum cache:clear
```

## 配置方法
1. 进入管理面板 → 扩展
2. 找到 Auto Lock
3. 点击设置
4. 配置启用状态和阈值

## 发布步骤
详见 PUBLISH.md

---
生成时间: 2025-10-07
