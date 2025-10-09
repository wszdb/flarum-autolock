# 🚀 Flarum AutoLock v2.2.0 部署指南

## 📋 概述

本指南将帮助您将 v2.2.0 版本（标签豁免功能）部署到 GitHub 并发布。

## ✅ 已完成的修改

### 后端修改
- ✅ `src/Listener/PostedListener.php` - 添加标签豁免检查逻辑
- ✅ `extend.php` - 添加 `exempt_tags` 默认设置

### 前端修改
- ✅ `js/src/admin/index.ts` - 添加标签多选框界面
- ✅ `locale/en.yml` - 英文翻译
- ✅ `locale/zh-Hans.yml` - 中文翻译

### 配置文件
- ✅ `package.json` - NPM 配置
- ✅ `webpack.config.js` - Webpack 配置
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `README.md` - 更新文档
- ✅ `CHANGELOG.md` - 版本日志

## 🔧 编译前端资源

### 方法一：在 Flarum 开发环境中编译（推荐）

如果您有 Flarum 开发环境：

```bash
# 1. 进入插件目录
cd /path/to/flarum/extensions/wszdb-autolock

# 2. 安装依赖
npm install

# 3. 编译生产版本
npm run build

# 或者开发模式（带监听）
npm run dev
```

编译后会在 `js/dist/` 目录生成：
- `admin.js` - 管理面板 JS
- `forum.js` - 论坛前端 JS

### 方法二：使用 GitHub Actions 自动编译

我们可以创建一个 GitHub Actions 工作流来自动编译：

1. 创建 `.github/workflows/frontend-build.yml`
2. 推送代码后，Actions 会自动编译
3. 下载编译产物并提交到仓库

## 📦 发布到 GitHub

### 步骤 1：提交所有修改

```bash
# 1. 查看修改的文件
git status

# 2. 添加所有修改
git add .

# 3. 提交修改
git commit -m "feat: Add tag exemption feature for v2.2.0

- Add exempt tags setting in admin panel
- Implement tag exemption check in PostedListener
- Add multi-tag selector UI component
- Update translations (EN & ZH)
- Update documentation and changelog"

# 4. 推送到 main 分支
git push origin main
```

### 步骤 2：创建 v2.2.0 标签

```bash
# 1. 创建带注释的标签
git tag -a v2.2.0 -m "Release v2.2.0 - Tag Exemption Feature

New Features:
- Tag exemption: Configure specific tags to be exempt from auto-locking
- Multi-tag selector in admin panel
- Enhanced logging for tag checks

Changes:
- Updated PostedListener with tag exemption logic
- Improved admin UI with checkbox-based tag selector
- Added translations for new features

Technical:
- Added wszdb-autolock.exempt_tags setting
- Backward compatible with existing installations"

# 2. 推送标签到远程
git push origin v2.2.0

# 或者推送所有标签
git push --tags
```

### 步骤 3：在 GitHub 创建 Release

访问 GitHub 仓库页面：

1. 点击 **Releases** → **Draft a new release**
2. 选择标签：`v2.2.0`
3. 填写 Release 标题：`v2.2.0 - Tag Exemption Feature`
4. 填写 Release 说明（见下方模板）
5. 勾选 **Set as the latest release**
6. 点击 **Publish release**

## 📝 GitHub Release 说明模板

```markdown
# 🎉 v2.2.0 - Tag Exemption Feature

## ✨ New Features

### 🏷️ Tag Exemption
Configure specific tags to be exempt from auto-locking! Discussions with exempt tags will never be automatically locked, regardless of post count.

**How to use:**
1. Go to Admin Panel → Extensions → Auto Lock → Settings
2. Find "Exempt Tags" section
3. Check the tags you want to exempt
4. Save settings

### 🎛️ Multi-Tag Support
- Select one or multiple tags for exemption
- Intuitive checkbox-based UI
- Real-time tag display with colors

## 🔧 Changes

- **Enhanced Logic**: Tag exemption check runs before threshold validation
- **Improved UI**: Beautiful tag selector with color indicators
- **Better Logging**: Detailed logs for tag exemption checks
- **Full i18n**: English and Chinese translations

## 📋 Technical Details

- Added `wszdb-autolock.exempt_tags` setting (JSON array of tag IDs)
- Updated `PostedListener` to check discussion tags
- Backward compatible with existing v2.1.x installations
- No database migration required

## 📦 Installation

**For new users:**
```bash
composer require wszdb/flarum-autolock
php flarum extension:enable wszdb-autolock
php flarum cache:clear
```

**For existing users (upgrade from v2.1.x):**
```bash
composer update wszdb/flarum-autolock
php flarum cache:clear
```

## 🔗 Links

- [Documentation](https://github.com/wszdb/flarum-autolock#readme)
- [Changelog](https://github.com/wszdb/flarum-autolock/blob/main/CHANGELOG.md)
- [Report Issues](https://github.com/wszdb/flarum-autolock/issues)

---

**Full Changelog**: https://github.com/wszdb/flarum-autolock/compare/v2.1.0...v2.2.0
```

## ⚠️ 重要提示

### 关于编译文件

Flarum 插件的 `js/dist/` 目录包含编译后的 JS 文件，有两种处理方式：

**方式 A：提交编译文件（推荐用于发布）**
```bash
# 编译后提交
npm run build
git add js/dist/
git commit -m "build: Compile frontend assets for v2.2.0"
git push
```

**方式 B：使用 .gitignore 忽略（开发时）**
```
# 在 .gitignore 中添加
js/dist/
```

### 关于 Packagist

如果您的插件已发布到 Packagist：

1. Packagist 会自动检测新的 Git 标签
2. 通常几分钟内会自动更新
3. 可以手动触发更新：访问 Packagist → 您的包 → Update

## 🎯 验证清单

发布前请确认：

- [ ] 所有代码修改已提交
- [ ] 前端资源已编译（如果提交 dist 文件）
- [ ] 版本号已更新（package.json, CHANGELOG.md）
- [ ] README.md 已更新
- [ ] Git 标签已创建并推送
- [ ] GitHub Release 已发布
- [ ] Packagist 已更新（如适用）

## 🆘 常见问题

### Q: 如何在没有 Flarum 环境的情况下编译？

A: 可以使用 Docker：
```bash
docker run --rm -v $(pwd):/app -w /app node:18 sh -c "npm install && npm run build"
```

### Q: 编译失败怎么办？

A: 检查：
1. Node.js 版本是否 >= 16
2. 是否正确安装了 `flarum-webpack-config`
3. 查看错误日志，通常是依赖问题

### Q: 用户如何升级？

A: 运行：
```bash
composer update wszdb/flarum-autolock
php flarum cache:clear
```

## 📞 支持

如有问题，请：
1. 查看 [GitHub Issues](https://github.com/wszdb/flarum-autolock/issues)
2. 提交新 Issue
3. 联系开发者

---

**祝发布顺利！** 🎊