@echo off
REM Flarum Auto Lock Extension Build Script for Windows
REM This script helps build the extension for production

echo.
echo Building Flarum Auto Lock Extension...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js first.
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo npm is not installed. Please install npm first.
    exit /b 1
)

REM Check if composer is installed
where composer >nul 2>nul
if %errorlevel% neq 0 (
    echo Composer is not installed. Please install Composer first.
    exit /b 1
)

echo All required tools are installed.
echo.

REM Install PHP dependencies
echo Installing PHP dependencies...
composer install --no-dev --optimize-autoloader
if %errorlevel% neq 0 (
    echo Failed to install PHP dependencies.
    exit /b 1
)
echo PHP dependencies installed.
echo.

REM Install JavaScript dependencies
echo Installing JavaScript dependencies...
cd js
call npm install
if %errorlevel% neq 0 (
    echo Failed to install JavaScript dependencies.
    cd ..
    exit /b 1
)
echo JavaScript dependencies installed.
echo.

REM Build JavaScript assets
echo Building JavaScript assets...
call npm run build
if %errorlevel% neq 0 (
    echo Failed to build JavaScript assets.
    cd ..
    exit /b 1
)
echo JavaScript assets built.
echo.

cd ..

REM Clean up development files
echo Cleaning up development files...
if exist node_modules rmdir /s /q node_modules
if exist js\node_modules rmdir /s /q js\node_modules
echo Cleanup complete.
echo.

echo Build completed successfully!
echo.
echo Next steps:
echo 1. Test the extension in a Flarum installation
echo 2. Commit and push to GitHub
echo 3. Create a release tag
echo 4. Submit to Packagist
echo.
pause