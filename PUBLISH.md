# Publishing Guide

Complete guide to publish your Flarum Auto Lock extension to Packagist and GitHub.

## Prerequisites

- [x] GitHub account
- [x] Packagist account (sign up at https://packagist.org)
- [x] Git installed locally
- [x] All files ready in `wszdb-flarum-autolock/` directory

## Step 1: Initialize Git Repository (5 minutes)

```bash
cd wszdb-flarum-autolock

# Initialize Git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial release v1.0.0"
```

## Step 2: Create GitHub Repository (3 minutes)

1. Go to https://github.com/new
2. Repository name: `flarum-autolock`
3. Description: `Automatically lock Flarum discussions after reaching specified post count`
4. Visibility: **Public**
5. **DO NOT** initialize with README (we already have one)
6. Click **Create repository**

## Step 3: Push to GitHub (2 minutes)

```bash
# Add remote
git remote add origin https://github.com/wszdb/flarum-autolock.git

# Push code
git branch -M main
git push -u origin main
```

## Step 4: Create Release Tag (2 minutes)

```bash
# Create version tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tag
git push origin v1.0.0
```

## Step 5: Submit to Packagist (5 minutes)

1. Go to https://packagist.org/packages/submit
2. Enter repository URL: `https://github.com/wszdb/flarum-autolock`
3. Click **Check**
4. Review package information
5. Click **Submit**

### Enable Auto-Update (Recommended)

1. Go to your package page on Packagist
2. Click **Settings**
3. Find **GitHub Service Hook**
4. Follow instructions to set up webhook
5. This auto-updates Packagist when you push to GitHub

## Step 6: Verify Installation (3 minutes)

Test that users can install your extension:

```bash
# In a test Flarum installation
composer require wszdb/flarum-autolock

# Should download and install successfully
```

## Version Management

### Semantic Versioning

Follow [SemVer](https://semver.org/):
- **Major** (1.0.0): Breaking changes
- **Minor** (1.1.0): New features, backward compatible
- **Patch** (1.0.1): Bug fixes

### Creating New Releases

1. **Update version in composer.json**
```json
{
    "version": "1.1.0"
}
```

2. **Update CHANGELOG.md**
```markdown
## [1.1.0] - 2025-10-15
### Added
- New feature description
```

3. **Commit changes**
```bash
git add .
git commit -m "Release v1.1.0"
```

4. **Create and push tag**
```bash
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin main
git push origin v1.1.0
```

5. **Packagist auto-updates** (if webhook configured)

## GitHub Release Notes (Optional but Recommended)

1. Go to https://github.com/wszdb/flarum-autolock/releases
2. Click **Draft a new release**
3. Choose tag: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Description:
```markdown
## 🎉 Initial Release

### Features
- Automatic discussion locking at configurable threshold
- Admin panel settings for enable/disable and threshold
- Multi-language support (English, Chinese)
- Event-driven architecture

### Installation
\`\`\`bash
composer require wszdb/flarum-autolock
\`\`\`

See [README.md](README.md) for full documentation.
```
6. Click **Publish release**

## Promotion (Optional)

Share your extension:

1. **Flarum Community**
   - Post in [Extensions tag](https://discuss.flarum.org/t/extensions)
   - Include screenshots and description

2. **Social Media**
   - Twitter/X with #flarum hashtag
   - Reddit r/flarum

3. **Documentation**
   - Add to [Flarum Extensions Wiki](https://github.com/flarum/docs/wiki/Extensions)

## Maintenance Checklist

- [ ] Monitor GitHub issues
- [ ] Respond to bug reports within 7 days
- [ ] Update for new Flarum versions
- [ ] Keep dependencies up to date
- [ ] Review and merge pull requests

## Troubleshooting

### Packagist not updating
- Check webhook is configured
- Manually trigger update on Packagist
- Verify tag was pushed correctly

### Composer install fails
- Check `composer.json` syntax
- Verify version constraints
- Test in fresh Flarum installation

### Extension not appearing in Flarum
- Verify `type: flarum-extension` in composer.json
- Check extension ID matches in all files
- Clear Flarum cache

---

## Quick Reference

**GitHub Repo**: https://github.com/wszdb/flarum-autolock  
**Packagist**: https://packagist.org/packages/wszdb/flarum-autolock  
**Install**: `composer require wszdb/flarum-autolock`

🎉 **Congratulations!** Your extension is now published!
