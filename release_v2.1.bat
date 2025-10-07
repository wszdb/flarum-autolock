@echo off
chcp 65001 >nul
echo =========================================
echo 🚀 发布 Flarum Auto Lock v2.1.0
echo =========================================

cd /d "%~dp0"

echo.
echo 📦 添加文件...
git add .
git status --short

echo.
git commit -m "Release v2.1.0: Stable version with fixed post count calculation"

echo.
echo 🏷️  创建 v2.1.0 标签...
git tag -a v2.1.0 -m "Release v2.1.0"

echo.
echo 📤 推送到 GitHub...
git push origin main
git push origin v2.1.0

echo.
echo =========================================
echo ✅ v2.1.0 发布成功！
echo =========================================
echo.
echo 📋 后续步骤:
echo.
echo 1. 访问 Packagist 更新
echo    https://packagist.org/packages/wszdb/flarum-autolock
echo.
echo 2. 在服务器更新:
echo    composer update wszdb/flarum-autolock
echo.
pause
