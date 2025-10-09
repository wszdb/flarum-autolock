# 🚀 GitHub 更新指南 - Flarum AutoLock v2.2.0

## 📋 当前状态

✅ 项目文件夹：`flarum-autolock-v2.2.0`
✅ 所有源码文件已准备
✅ 前端资源已编译（js/dist/admin.js 和 forum.js）
✅ 文档已更新
✅ 共 19 个文件

---

## 🎯 更新到 GitHub 的步骤

### 方法一：完整替换（推荐，最简单）⭐

这个方法会完全替换 GitHub 仓库内容，确保所有文件都是最新的。

#### 步骤 1：进入您的 GitHub 仓库本地目录

```bash
# 如果还没有克隆仓库，先克隆
git clone https://github.com/wszdb/flarum-autolock.git
cd flarum-autolock

# 如果已经有本地仓库，先拉取最新代码
cd /path/to/your/flarum-autolock
git pull origin main
```

#### 步骤 2：备份并清空仓库（保留 .git）

```bash
# Windows 系统
# 删除所有文件，但保留 .git 文件夹
for /f "delims=" %i in ('dir /b /a-d ^| findstr /v /i ".git"') do del "%i"
for /f "delims=" %i in ('dir /b /ad ^| findstr /v /i ".git"') do rd /s /q "%i"

# Linux/Mac 系统
# 删除所有文件，但保留 .git 文件夹
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +
```

#### 步骤 3：复制新文件到仓库

```bash
# 将 flarum-autolock-v2.2.0 文件夹中的所有内容复制到仓库根目录

# Windows 系统（在当前工作目录执行）
xcopy "flarum-autolock-v2.2.0\*" "C:\path\to\flarum-autolock\" /E /H /Y

# Linux/Mac 系统
cp -r flarum-autolock-v2.2.0/* /path/to/your/flarum-autolock/
cp flarum-autolock-v2.2.0/.gitignore /path/to/your/flarum-autolock/
```

#### 步骤 4：提交并推送到 GitHub

```bash
# 进入仓库目录
cd /path/to/your/flarum-autolock

# 查看更改
git status

# 添加所有文件
git add .

# 提交更改
git commit -m "feat: Add tag exemption feature for v2.2.0

- Add exempt tags setting in admin panel with multi-tag selector
- Implement tag exemption check in PostedListener
- Add multi-tag selector UI component with color display
- Update translations (English & Simplified Chinese)
- Update documentation and changelog
- Compile frontend assets (admin.js & forum.js)

New Features:
- Tag exemption: Configure specific tags to be exempt from auto-locking
- Multi-tag support: Select one or multiple tags
- Enhanced UI: Checkbox-based tag selector with color indicators

Technical Changes:
- Added wszdb-autolock.exempt_tags setting (JSON array)
- Tag exemption check runs before threshold validation
- Backward compatible with v2.1.x"

# 推送到 GitHub
git push origin main
```

#### 步骤 5：创建 v2.2.0 标签

```bash
# 创建带注释的标签
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
- Backward compatible with existing installations
- Includes compiled frontend assets"

# 推送标签
git push origin v2.2.0
```

#### 步骤 6：在 GitHub 创建 Release

1. 访问：https://github.com/wszdb/flarum-autolock/releases/new

2. 填写信息：
   - **Choose a tag**: 选择 `v2.2.0`
   - **Release title**: `v2.2.0 - Tag Exemption Feature`
   - **Description**: 复制下面的内容

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
- Includes compiled frontend assets

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

3. 勾选 **Set as the latest release**

4. 点击 **Publish release**

---

### 方法二：使用提供的部署脚本

如果您在 Linux/Mac 系统上，可以使用自动化脚本：

```bash
# 1. 将项目文件夹内容复制到您的仓库
cp -r flarum-autolock-v2.2.0/* /path/to/your/flarum-autolock/
cp flarum-autolock-v2.2.0/.gitignore /path/to/your/flarum-autolock/

# 2. 进入仓库目录
cd /path/to/your/flarum-autolock

# 3. 运行部署脚本
bash deploy-v2.2.sh
```

脚本会自动完成提交、推送和创建标签的操作。

---

## 📝 Packagist 更新

发布 GitHub Release 后：

1. Packagist 会在 5-10 分钟内自动检测新标签
2. 如果没有自动更新，可以手动触发：
   - 访问：https://packagist.org/packages/wszdb/flarum-autolock
   - 点击右上角的 **Update** 按钮

---

## ✅ 验证清单

发布前请确认：

- [ ] 所有文件已复制到 GitHub 仓库
- [ ] 前端编译文件（js/dist/）已包含
- [ ] 代码已提交并推送到 main 分支
- [ ] v2.2.0 标签已创建并推送
- [ ] GitHub Release 已发布
- [ ] Packagist 已更新（等待几分钟）

---

## 🆘 常见问题

### Q1: 如何确认文件已正确上传？

访问 GitHub 仓库页面，检查：
- `js/dist/admin.js` 和 `js/dist/forum.js` 是否存在
- `src/Listener/PostedListener.php` 是否包含新的标签豁免逻辑
- `README.md` 是否显示 v2.2.0 信息

### Q2: 如果 git push 失败怎么办？

可能是权限问题，确保：
1. 您已登录 GitHub 账号
2. 有仓库的写权限
3. 如果使用 HTTPS，可能需要输入 Personal Access Token

### Q3: 用户如何升级到 v2.2.0？

用户只需运行：
```bash
composer update wszdb/flarum-autolock
php flarum cache:clear
```

---

## 🎊 完成！

按照上述步骤操作后，您的 Flarum AutoLock v2.2.0 就成功发布到 GitHub 了！

用户可以通过 Composer 直接升级使用新的标签豁免功能。

祝发布顺利！🚀
