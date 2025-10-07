# 快速开始指南 / Quick Start Guide

## 🚀 5分钟快速上手

### 前置要求

- ✅ PHP 7.4 或更高版本
- ✅ Composer
- ✅ Node.js 14 或更高版本
- ✅ 一个运行中的 Flarum 论坛

### 安装步骤

#### 方法一：通过 Composer 安装（推荐）

```bash
# 进入你的 Flarum 安装目录
cd /path/to/your/flarum

# 安装扩展
composer require wszdb/flarum-autolock

# 清除缓存
php flarum cache:clear

# 启用扩展
php flarum extension:enable wszdb-autolock
```

#### 方法二：手动安装（开发测试）

```bash
# 克隆仓库到扩展目录
cd /path/to/your/flarum/extensions
git clone https://github.com/wszdb/flarum-autolock.git wszdb-autolock

# 进入扩展目录
cd wszdb-autolock

# 安装依赖
composer install
cd js && npm install && npm run build

# 返回 Flarum 根目录
cd /path/to/your/flarum

# 启用扩展
php flarum extension:enable wszdb-autolock
```

### 配置扩展

1. **登录管理后台**
   - 访问 `https://your-forum.com/admin`

2. **找到扩展设置**
   - 点击左侧菜单 "扩展"
   - 找到 "Auto Lock" 扩展
   - 点击设置图标

3. **配置参数**
   - **启用自动锁定**: 开启此功能
   - **楼层阈值**: 设置自动锁定的楼层数（默认：100）
   - 点击 "保存更改"

### 测试功能

1. **创建测试讨论**
   - 在论坛创建一个新讨论

2. **发布回复**
   - 发布多个回复，直到达到设置的阈值

3. **验证锁定**
   - 当回复数达到阈值时，讨论应该自动锁定
   - 尝试再次回复，应该会提示讨论已锁定

### 常见问题

#### Q: 安装后没有效果？
A: 请确保：
1. 扩展已启用：`php flarum info` 检查
2. 缓存已清除：`php flarum cache:clear`
3. 在管理后台启用了自动锁定功能

#### Q: 如何修改阈值？
A: 在管理后台的扩展设置中修改 "楼层阈值" 参数

#### Q: 已锁定的讨论会被影响吗？
A: 不会，扩展会跳过已经锁定的讨论

#### Q: 如何卸载？
```bash
cd /path/to/your/flarum
php flarum extension:disable wszdb-autolock
composer remove wszdb/flarum-autolock
php flarum cache:clear
```

### 开发者快速开始

```bash
# 克隆仓库
git clone https://github.com/wszdb/flarum-autolock.git
cd flarum-autolock

# 安装依赖
composer install
cd js && npm install

# 开发模式（自动重新构建）
npm run dev

# 生产构建
npm run build
```

### 获取帮助

- 📖 [完整文档](README.md)
- 🐛 [报告问题](https://github.com/wszdb/flarum-autolock/issues)
- 💬 [讨论交流](https://discuss.flarum.org)

---

祝使用愉快！🎉