# 发布指南 / Publishing Guide

## 发布到 GitHub

### 1. 初始化 Git 仓库

```bash
cd wszdb-flarum-autolock
git init
git add .
git commit -m "Initial commit: Flarum Auto Lock extension v1.0.0"
```

### 2. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`flarum-autolock`
3. 描述：`Automatically lock Flarum discussions when they reach a specific number of posts`
4. 选择 Public（公开）
5. 不要初始化 README（我们已经有了）
6. 点击 "Create repository"

### 3. 推送到 GitHub

```bash
git remote add origin https://github.com/wszdb/flarum-autolock.git
git branch -M main
git push -u origin main
```

### 4. 创建第一个 Release

```bash
# 创建标签
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

然后在 GitHub 上：
1. 进入仓库页面
2. 点击 "Releases" → "Create a new release"
3. 选择标签 `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. 描述中复制 CHANGELOG.md 的内容
6. 点击 "Publish release"

## 发布到 Packagist

### 1. 注册 Packagist 账号

访问 https://packagist.org/ 并注册账号（如果还没有）

### 2. 提交包

1. 登录 Packagist
2. 点击 "Submit"
3. 输入 GitHub 仓库 URL：`https://github.com/wszdb/flarum-autolock`
4. 点击 "Check"
5. 确认信息无误后点击 "Submit"

### 3. 设置自动更新（推荐）

在 GitHub 仓库设置 Webhook：

1. 进入 GitHub 仓库 → Settings → Webhooks → Add webhook
2. Payload URL: `https://packagist.org/api/github?username=你的Packagist用户名`
3. Content type: `application/json`
4. Secret: 从 Packagist 个人资料页面获取 API Token
5. 选择 "Just the push event"
6. 点击 "Add webhook"

## 发布到 Flarum 官方扩展市场（可选）

1. 访问 https://discuss.flarum.org/t/extensions
2. 创建新主题介绍你的扩展
3. 按照社区规范填写扩展信息
4. 等待社区反馈和审核

## 安装测试

发布后，用户可以通过以下命令安装：

```bash
composer require wszdb/flarum-autolock
```

你也应该自己测试一下安装流程：

```bash
# 在一个新的 Flarum 安装中测试
cd /path/to/test/flarum
composer require wszdb/flarum-autolock
php flarum migrate
php flarum cache:clear
```

## 版本更新流程

当你需要发布新版本时：

1. 更新 `CHANGELOG.md`
2. 修改 `composer.json` 中的版本号（如果需要）
3. 提交更改：
```bash
git add .
git commit -m "Release version x.x.x"
git tag -a vx.x.x -m "Release version x.x.x"
git push origin main
git push origin vx.x.x
```

4. 在 GitHub 创建新的 Release
5. Packagist 会自动更新（如果设置了 Webhook）

## 维护建议

- 及时回复 GitHub Issues
- 保持文档更新
- 定期检查与新版本 Flarum 的兼容性
- 遵循语义化版本规范
- 保持代码质量和测试覆盖

---

祝发布顺利！🚀