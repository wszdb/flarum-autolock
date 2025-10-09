#!/bin/bash

# Flarum AutoLock v2.2.0 部署脚本
# 使用方法: bash deploy-v2.2.sh

set -e

echo "🚀 开始部署 Flarum AutoLock v2.2.0..."

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 步骤 1: 检查 Git 状态
echo -e "\n${YELLOW}步骤 1/6: 检查 Git 状态...${NC}"
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}错误: 工作目录有未提交的更改${NC}"
    git status --short
    exit 1
fi
echo -e "${GREEN}✓ Git 状态干净${NC}"

# 步骤 2: 编译前端资源
echo -e "\n${YELLOW}步骤 2/6: 编译前端资源...${NC}"
if command -v npm &> /dev/null; then
    echo "正在安装依赖..."
    npm install
    echo "正在编译..."
    npm run build
    echo -e "${GREEN}✓ 前端编译完成${NC}"
else
    echo -e "${RED}警告: 未找到 npm，跳过编译步骤${NC}"
    echo "请手动编译或使用 GitHub Actions"
fi

# 步骤 3: 提交所有更改
echo -e "\n${YELLOW}步骤 3/6: 提交更改到 Git...${NC}"
git add .
git commit -m "feat: Add tag exemption feature for v2.2.0

- Add exempt tags setting in admin panel
- Implement tag exemption check in PostedListener
- Add multi-tag selector UI component
- Update translations (EN & ZH)
- Update documentation and changelog
- Compile frontend assets"

echo -e "${GREEN}✓ 更改已提交${NC}"

# 步骤 4: 推送到远程仓库
echo -e "\n${YELLOW}步骤 4/6: 推送到 GitHub...${NC}"
git push origin main
echo -e "${GREEN}✓ 已推送到 main 分支${NC}"

# 步骤 5: 创建标签
echo -e "\n${YELLOW}步骤 5/6: 创建 v2.2.0 标签...${NC}"
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

git push origin v2.2.0
echo -e "${GREEN}✓ 标签 v2.2.0 已创建并推送${NC}"

# 步骤 6: 完成提示
echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🎉 部署完成！${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo -e "\n${YELLOW}下一步操作：${NC}"
echo "1. 访问 GitHub 仓库创建 Release"
echo "   https://github.com/wszdb/flarum-autolock/releases/new"
echo ""
echo "2. 选择标签: v2.2.0"
echo ""
echo "3. 填写 Release 信息（参考 DEPLOYMENT_GUIDE.md）"
echo ""
echo "4. 发布 Release"
echo ""
echo -e "${YELLOW}Packagist 会自动检测新标签并更新${NC}"
echo ""
echo -e "${GREEN}部署脚本执行完毕！${NC}"