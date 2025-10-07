# 项目结构说明 / Project Structure

## 目录结构

```
wszdb-flarum-autolock/
├── .github/                          # GitHub 配置文件
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md            # Bug 报告模板
│   ├── workflows/
│   │   └── build.yml                # GitHub Actions 自动构建
│   ├── FUNDING.yml                  # 赞助配置
│   └── PULL_REQUEST_TEMPLATE.md     # PR 模板
├── js/                              # 前端 JavaScript 代码
│   ├── src/
│   │   ├── admin/
│   │   │   └── index.js             # 管理后台入口
│   │   └── forum/
│   │       └── index.js             # 论坛前端入口
│   ├── dist/                        # 编译后的文件（自动生成）
│   ├── tsconfig.json                # TypeScript 配置
│   └── package.json                 # NPM 包配置
├── locale/                          # 语言包
│   ├── en.yml                       # 英文
│   └── zh-Hans.yml                  # 简体中文
├── src/                             # PHP 后端代码
│   └── Listener/
│       └── LockDiscussionOnPostCount.php  # 核心监听器
├── .editorconfig                    # 编辑器配置
├── .gitignore                       # Git 忽略文件
├── build.bat                        # Windows 构建脚本
├── build.sh                         # Linux/Mac 构建脚本
├── CHANGELOG.md                     # 版本更新日志
├── composer.json                    # Composer 包配置
├── CONTRIBUTING.md                  # 贡献指南
├── extend.php                       # Flarum 扩展引导文件
├── LICENSE                          # MIT 许可证
├── PROJECT_STRUCTURE.md             # 本文件
├── PUBLISH.md                       # 发布指南
├── README.md                        # 英文说明文档
├── README_ZH.md                     # 中文说明文档
└── webpack.config.js                # Webpack 配置
```

## 核心文件说明

### 后端文件

#### `composer.json`
- 定义扩展的基本信息、依赖和自动加载规则
- 包名：`wszdb/flarum-autolock`
- 类型：`flarum-extension`

#### `extend.php`
- Flarum 扩展的入口文件
- 注册前端资源、语言包和事件监听器
- 配置管理面板设置项

#### `src/Listener/LockDiscussionOnPostCount.php`
- 核心业务逻辑
- 监听 `Posted` 事件
- 检查帖子数量并自动锁定讨论

### 前端文件

#### `js/src/admin/index.js`
- 管理后台界面
- 提供设置项：启用/禁用、楼层阈值

#### `js/src/forum/index.js`
- 论坛前端入口
- 当前版本仅初始化，无额外功能

#### `locale/*.yml`
- 多语言支持文件
- 提供界面文本翻译

### 配置文件

#### `package.json`
- NPM 包配置
- 定义构建脚本和依赖

#### `webpack.config.js`
- 前端构建配置
- 使用 Flarum 官方 webpack 配置

#### `.gitignore`
- Git 版本控制忽略规则
- 排除 `vendor/`, `node_modules/`, 构建产物等

## 工作流程

### 开发流程

1. **安装依赖**
   ```bash
   composer install
   cd js && npm install
   ```

2. **开发模式**
   ```bash
   cd js && npm run dev
   ```

3. **构建生产版本**
   ```bash
   ./build.sh  # Linux/Mac
   build.bat   # Windows
   ```

### 核心逻辑流程

```
用户发帖
    ↓
触发 Posted 事件
    ↓
LockDiscussionOnPostCount 监听器
    ↓
检查是否启用自动锁定
    ↓
检查讨论是否已锁定
    ↓
获取当前帖子数
    ↓
比较阈值
    ↓
达到阈值 → 锁定讨论
```

### 配置存储

- 设置存储在 Flarum 的 `settings` 表中
- 键名：
  - `wszdb-autolock.enabled` - 是否启用
  - `wszdb-autolock.post_threshold` - 楼层阈值

## 扩展点

### 未来可扩展功能

1. **通知功能**
   - 讨论被锁定时通知作者和参与者

2. **白名单**
   - 排除特定标签或分类

3. **角色豁免**
   - 允许管理员/版主超过阈值继续发帖

4. **统计面板**
   - 显示自动锁定的讨论统计

5. **自定义锁定消息**
   - 允许自定义锁定提示文本

## 技术栈

- **后端**: PHP 7.4+
- **前端**: JavaScript (ES6+)
- **构建工具**: Webpack 5
- **包管理**: Composer + NPM
- **框架**: Flarum 1.0+

## 许可证

MIT License - 详见 `LICENSE` 文件