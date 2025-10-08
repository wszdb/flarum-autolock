# Flarum Auto Lock Extension

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Flarum](https://img.shields.io/badge/flarum-%5E1.8.0-orange.svg)
![PHP](https://img.shields.io/badge/php-%5E8.2-purple.svg)

🔒 Automatically lock discussions when they reach a specified number of posts.

## Features

<img width="563" height="444" alt="局部截取_20251007_230137" src="https://github.com/user-attachments/assets/5a012bb5-24ee-484b-9d9d-cd35d2b4a164" />


- ✅ **Automatic Locking**: Discussions are automatically locked when reaching the configured post count
- ⚙️ **Configurable Threshold**: Set custom post count threshold in admin panel (default: 100)
- 🎛️ **Enable/Disable Toggle**: Easy on/off switch in admin settings
- 🌍 **Multi-language Support**: English and Simplified Chinese included
- 🚀 **Event-Driven**: Uses Flarum's native event system for optimal performance
- 🔧 **Zero Configuration**: Works out of the box with sensible defaults
- 📊 **Detailed Logging**: Comprehensive logs for debugging and monitoring

## Installation

Install via Composer:

```bash
composer require wszdb/flarum-autolock
```

Enable the extension:

```bash
php flarum extension:enable wszdb-autolock
```

Clear cache:

```bash
php flarum cache:clear
```

## Configuration

1. Navigate to **Admin Panel** → **Extensions**
2. Find **Auto Lock** extension
3. Click **Settings** button
4. Configure options:
   - **Enable Auto Lock**: Toggle to enable/disable the feature
   - **Post Count Threshold**: Set the number of posts after which discussions will be locked (minimum: 1, default: 100)

## How It Works

### Post Count Calculation

The extension uses the following formula to calculate total posts:

```
Total Posts = comment_count (replies) + 1 (original post)

Example:
- Original post = Floor 1
- 99 replies = Floor 2-100
- Total = 100 floors

When total >= threshold → Auto lock ✅
```

### Trigger Logic

1. When a new post is published, the extension listens to the `Posted` event
2. It refreshes the discussion data and calculates total posts
3. If total posts ≥ threshold and discussion is not locked, it locks the discussion
4. All actions are logged for monitoring

### Important Notes

- ⚠️ **Only affects new posts**: Extension does not retroactively lock old discussions
- ⚠️ **Event-driven**: Locks happen when someone posts, not on a schedule
- ✅ **Skips locked discussions**: Already locked discussions are ignored


## License

This extension is licensed under the [MIT License](LICENSE).

## Links

- [Packagist](https://packagist.org/packages/wszdb/flarum-autolock)
- [GitHub Repository](https://github.com/wszdb/flarum-autolock)
- [Flarum Community](https://discuss.flarum.org)

---

**Developed by** [wszdb](https://github.com/wszdb)
