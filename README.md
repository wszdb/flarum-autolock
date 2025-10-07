# Flarum Auto Lock Extension

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Flarum](https://img.shields.io/badge/flarum-%5E1.8.0-orange.svg)
![PHP](https://img.shields.io/badge/php-%5E8.2-purple.svg)

🔒 Automatically lock discussions when they reach a specified number of posts.

## Features

- ✅ **Automatic Locking**: Discussions are automatically locked when reaching the configured post count
- ⚙️ **Configurable Threshold**: Set custom post count threshold in admin panel (default: 100)
- 🎛️ **Enable/Disable Toggle**: Easy on/off switch in admin settings
- 🌍 **Multi-language Support**: English and Simplified Chinese included
- 🚀 **Event-Driven**: Uses Flarum's native event system for optimal performance
- 🔧 **Zero Configuration**: Works out of the box with sensible defaults

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
   - **Post Count Threshold**: Set the number of posts after which discussions will be locked (minimum: 1)

## How It Works

1. When a new post is published, the extension listens to the `Posted` event
2. It checks if the feature is enabled and retrieves the threshold setting
3. If the discussion's post count reaches or exceeds the threshold, it automatically locks the discussion
4. Already locked discussions are skipped to avoid redundant operations

## Technical Details

### PHP Requirements
- PHP 8.2 or higher
- Flarum 1.8.0 or higher

### File Structure
```
wszdb-flarum-autolock/
├── js/
│   ├── dist/              # Pre-compiled JavaScript (webpack IIFE format)
│   │   ├── admin.js       # Admin panel settings
│   │   └── forum.js       # Forum frontend
│   └── src/               # TypeScript source (optional)
├── locale/
│   ├── en.yml             # English translations
│   └── zh-Hans.yml        # Simplified Chinese translations
├── src/
│   └── Listener/
│       └── PostedListener.php  # Event listener
├── composer.json
├── extend.php
└── README.md
```

### Event Listener
The extension uses `Flarum\Post\Event\Posted` to detect new posts and automatically lock discussions when the threshold is reached.

## Troubleshooting

### Extension not showing in admin panel
- Clear cache: `php flarum cache:clear`
- Rebuild assets: `php flarum assets:publish`
- Check extension is enabled: `php flarum extension:list`

### Settings not saving
- Ensure proper file permissions on `storage/` directory
- Check browser console for JavaScript errors
- Verify database connection

### Discussions not locking
- Confirm the extension is enabled in settings
- Check threshold value is set correctly (minimum: 1)
- Verify post count is accurate in database

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This extension is licensed under the [MIT License](LICENSE).

## Links

- [Packagist](https://packagist.org/packages/wszdb/flarum-autolock)
- [GitHub Repository](https://github.com/wszdb/flarum-autolock)
- [Flarum Community](https://discuss.flarum.org)

## Credits

Developed by [wszdb](https://github.com/wszdb)

---

**Note**: This extension follows Flarum 1.8+ standards with webpack IIFE format for JavaScript files.
