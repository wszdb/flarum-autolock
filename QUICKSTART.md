# Quick Start Guide

Get your Auto Lock extension up and running in 5 minutes! 🚀

## Step 1: Install (2 minutes)

```bash
# Navigate to your Flarum directory
cd /path/to/flarum

# Install via Composer
composer require wszdb/flarum-autolock

# Enable the extension
php flarum extension:enable wszdb-autolock

# Clear cache
php flarum cache:clear
```

## Step 2: Configure (2 minutes)

1. Open your Flarum admin panel
2. Go to **Extensions** page
3. Find **Auto Lock** in the list
4. Click the **Settings** button
5. Configure:
   - ✅ **Enable Auto Lock**: Turn it ON
   - 🔢 **Post Count Threshold**: Enter `100` (or your preferred number)
6. Click **Save Changes**

## Step 3: Test (1 minute)

1. Create a test discussion
2. Add posts until you reach the threshold
3. The discussion should automatically lock!

## Default Settings

If you don't change anything, the extension uses these defaults:
- **Enabled**: `true` (ON)
- **Threshold**: `100` posts

## Common Use Cases

### Scenario 1: Lock popular discussions at 500 posts
```
Threshold: 500
```

### Scenario 2: Lock all discussions at 50 posts
```
Threshold: 50
```

### Scenario 3: Temporarily disable auto-locking
```
Enable Auto Lock: OFF
```

## Verification Checklist

- [ ] Extension appears in admin panel
- [ ] Settings page loads without errors
- [ ] Settings save successfully
- [ ] Test discussion locks at threshold
- [ ] Previously locked discussions remain locked

## Need Help?

- Check [README.md](README.md) for detailed documentation
- Review [Troubleshooting](README.md#troubleshooting) section
- Open an issue on [GitHub](https://github.com/wszdb/flarum-autolock/issues)

---

🎉 **Congratulations!** Your Auto Lock extension is now active!
