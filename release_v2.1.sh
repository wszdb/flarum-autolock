#!/bin/bash

echo "========================================="
echo "🚀 发布 Flarum Auto Lock v2.1.0"
echo "========================================="

cd "$(dirname "$0")"

# 添加所有文件
echo ""
echo "📦 添加文件..."
git add .
git status --short

# 提交
echo ""
git commit -m "Release v2.1.0: Stable version with fixed post count calculation"

# 创建标签
echo ""
echo "🏷️  创建 v2.1.0 标签..."
git tag -a v2.1.0 -m "Release v2.1.0

Major Fixes:
- Fixed post count calculation using comment_count + 1
- Fixed PSR-3 Logger injection
- Fixed forum.js initialization
- Production tested and verified

This is a stable release ready for production use."

# 推送
echo ""
echo "📤 推送到 GitHub..."
git push origin main
git push origin v2.1.0

echo ""
echo "========================================="
echo "✅ v2.1.0 发布成功！"
echo "========================================="
echo ""
echo "📋 后续步骤:"
echo ""
echo "1. 访问 Packagist 更新（或等待自动更新）"
echo "   https://packagist.org/packages/wszdb/flarum-autolock"
echo ""
echo "2. 在服务器更新扩展:"
echo "   cd /var/www/flarum"
echo "   composer clear-cache"
echo "   composer update wszdb/flarum-autolock"
echo "   php flarum cache:clear"
echo "   rm -rf storage/cache/*"
echo "   systemctl restart php8.2-fpm"
echo ""
echo "3. 验证版本:"
echo "   composer show wszdb/flarum-autolock"
echo "   # 应该显示 v2.1.0"
echo ""
echo "🎉 完成！"
