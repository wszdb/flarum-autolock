# Flarum Auto Lock Extension

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Flarum](https://img.shields.io/badge/flarum-%5E1.8.0-orange.svg)
![PHP](https://img.shields.io/badge/php-%5E8.2-purple.svg)
![Version](https://img.shields.io/badge/version-2.2.0-green.svg)

🔒 Automatically lock discussions when they reach a specified number of posts.

## ✨ New in v2.2.0

- 🏷️ **Tag Exemption**: Configure specific tags to be exempt from auto-locking
- 🎛️ **Multi-Tag Support**: Select one or multiple tags for exemption
- 🌐 **Enhanced UI**: Intuitive tag selector in admin panel

## Features

- ✅ **Automatic Locking**: Discussions are automatically locked when reaching the configured post count
- 🏷️ **Tag Exemption**: Exempt specific tags from auto-locking (NEW in v2.2)
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
   - **Exempt Tags**: Select tags that should be exempt from auto-locking (NEW in v2.2)

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

### Tag Exemption (v2.2)

Discussions with exempt tags will never be auto-locked, regardless of post count:

1. Admin selects exempt tags in extension settings
2. When a post is published, the extension checks discussion tags
3. If any tag matches exempt list → Skip auto-lock
4. Otherwise → Apply normal threshold logic

### Trigger Logic

1. When a new post is published, the extension listens to the `Posted` event
2. It refreshes the discussion data and calculates total posts
3. Checks if discussion has any exempt tags (v2.2)
4. If total posts ≥ threshold and discussion is not locked, it locks the discussion
5. All actions are logged for monitoring

### Important Notes

- ⚠️ **Only affects new posts**: Extension does not retroactively lock old discussions
- ⚠️ **Event-driven**: Locks happen when someone posts, not on a schedule
- ✅ **Skips locked discussions**: Already locked discussions are ignored
- 🏷️ **Tag priority**: Exempt tags override threshold settings

## Development

### Building from Source

```bash
# Install dependencies
npm install

# Development build with watch
npm run dev

# Production build
npm run build
```

### File Structure

```
flarum-autolock/
├── src/
│   └── Listener/
│       └── PostedListener.php    # Core auto-lock logic
├── js/
│   ├── src/
│   │   ├── admin/
│   │   │   └── index.ts          # Admin panel UI
│   │   └── forum/
│   │       └── index.ts          # Forum frontend
│   └── dist/                      # Compiled JS (generated)
├── locale/
│   ├── en.yml                     # English translations
│   └── zh-Hans.yml                # Chinese translations
├── extend.php                     # Extension registration
└── composer.json                  # PHP dependencies
```

## Changelog

### v2.2.0 (2025-01-09)
- ✨ Added tag exemption feature
- 🎨 Enhanced admin UI with tag selector
- 📝 Updated documentation
- 🌐 Added translations for new features

### v2.1.0
- Initial release with basic auto-lock functionality

## License

This extension is licensed under the [MIT License](LICENSE).

## Links

- [Packagist](https://packagist.org/packages/wszdb/flarum-autolock)
- [GitHub Repository](https://github.com/wszdb/flarum-autolock)
- [Flarum Community](https://discuss.flarum.org)

---

**Developed by** [wszdb](https://github.com/wszdb)