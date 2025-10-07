# Flarum 自动锁帖插件

![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![Latest Stable Version](https://img.shields.io/packagist/v/wszdb/flarum-autolock.svg)](https://packagist.org/packages/wszdb/flarum-autolock)

一个 Flarum 扩展插件，当讨论达到特定楼层数时自动锁定。

## 功能特性

- 🔒 当讨论达到可配置的楼层阈值时自动锁定
- ⚙️ 通过管理面板轻松配置
- 🌍 多语言支持（英文和中文）
- 🎯 简单轻量
- 🔧 无需修改数据库

## 安装

使用 composer 安装：

```bash
composer require wszdb/flarum-autolock
```

## 使用方法

1. 在 Flarum 管理面板中启用此扩展
2. 进入扩展设置
3. 配置楼层阈值（默认：100 楼）
4. 根据需要启用/禁用自动锁定功能

## 配置说明

### 管理员设置

- **启用自动锁定**：开关自动锁定功能
- **楼层阈值**：设置讨论达到多少楼后自动锁定（最小值：1）

## 工作原理

当讨论中创建新帖子时：
1. 扩展检查自动锁定功能是否启用
2. 如果启用，计算讨论中的总帖子数
3. 如果数量达到或超过配置的阈值，讨论将自动锁定
4. 已经锁定的讨论会被跳过

## 系统要求

- Flarum 1.0 或更高版本
- PHP 7.4 或更高版本

## 相关链接

- [GitHub 仓库](https://github.com/wszdb/flarum-autolock)
- [Packagist](https://packagist.org/packages/wszdb/flarum-autolock)
- [Flarum 社区](https://discuss.flarum.org)

## 技术支持

如果您遇到任何问题或有建议，请在 GitHub 上[提交 issue](https://github.com/wszdb/flarum-autolock/issues)。

## 许可证

本扩展基于 [MIT 许可证](LICENSE) 开源。

## 贡献

欢迎贡献！请随时提交 Pull Request。

---

用 ❤️ 为 Flarum 社区制作