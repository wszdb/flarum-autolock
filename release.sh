#!/bin/bash

echo "========================================="
echo "🚀 发布 Flarum Auto Lock v2.0.2"
echo "========================================="

cd "$(dirname "$0")"

# 检查 Git 状态
echo ""
echo "📋 检查 Git 状态..."
git status --short

# 添加所有文件
echo ""
echo "📦 添加文件到 Git..."
git add .

# 提交
echo ""
git commit -m "Release v2.0.2: Fix post count calculation using comment_count + 1"

# 创建标签
echo ""
echo "🏷️  创建版本标签..."
git tag -a v2.0.2 -m "Release v2.0.2

Critical Fixes:
- Fixed post count calculation using comment_count + 1
- Fixed PSR-3 Logger injection
- Fixed forum.js initialization error

The extension now correctly calculates total posts and works in production."

# 显示最近的标签
echo ""
echo "📌 最近的标签:"
git tag -l | tail -3

# 推送
echo ""
echo "📤 推送到 GitHub..."
git push origin main
git push origin v2.0.2

echo ""
echo "========================================="
echo "✅ 发布成功！"
echo "========================================="
echo ""
echo "📋 后续步骤:"
echo ""
echo "1. 等待 Packagist 自动更新（1-5分钟）"
echo "   或访问: https://packagist.org/packages/wszdb/flarum-autolock"
echo "   点击 Update 按钮"
echo ""
echo "2. 在服务器更新扩展:"
echo "   cd /var/www/flarum"
echo "   composer update wszdb/flarum-autolock"
echo "   php flarum cache:clear"
echo "   systemctl restart php8.2-fpm"
echo ""
echo "3. 测试功能:"
echo "   - 设置阈值为 5"
echo "   - 创建新讨论并发布 4 个回复"
echo "   - 第 5 个帖子后应该自动锁定"
echo ""
echo "🎉 完成！"
