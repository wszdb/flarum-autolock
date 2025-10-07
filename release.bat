@echo off
echo =========================================
echo 🚀 发布 Flarum Auto Lock v2.0.2
echo =========================================

cd /d "%~dp0"

echo.
echo 📋 检查 Git 状态...
git status --short

echo.
echo 📦 添加文件到 Git...
git add .

echo.
git commit -m "Release v2.0.2: Fix post count calculation using comment_count + 1"

echo.
echo 🏷️  创建版本标签...
git tag -a v2.0.2 -m "Release v2.0.2"

echo.
echo 📤 推送到 GitHub...
git push origin main
git push origin v2.0.2

echo.
echo =========================================
echo ✅ 发布成功！
echo =========================================
echo.
echo 📋 后续步骤:
echo.
echo 1. 访问 Packagist 更新包
echo 2. 在服务器执行: composer update wszdb/flarum-autolock
echo.
pause
