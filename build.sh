#!/bin/bash

# Flarum Auto Lock Extension Build Script
# This script helps build the extension for production

set -e

echo "🚀 Building Flarum Auto Lock Extension..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Check if composer is installed
if ! command -v composer &> /dev/null; then
    echo "❌ Composer is not installed. Please install Composer first."
    exit 1
fi

echo "✅ All required tools are installed."
echo ""

# Install PHP dependencies
echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader
echo "✅ PHP dependencies installed."
echo ""

# Install JavaScript dependencies
echo "📦 Installing JavaScript dependencies..."
cd js
npm install
echo "✅ JavaScript dependencies installed."
echo ""

# Build JavaScript assets
echo "🔨 Building JavaScript assets..."
npm run build
echo "✅ JavaScript assets built."
echo ""

cd ..

# Clean up development files
echo "🧹 Cleaning up development files..."
rm -rf node_modules
rm -rf js/node_modules
echo "✅ Cleanup complete."
echo ""

echo "🎉 Build completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Test the extension in a Flarum installation"
echo "2. Commit and push to GitHub"
echo "3. Create a release tag"
echo "4. Submit to Packagist"
echo ""