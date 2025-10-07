# Flarum Auto Lock

![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![Latest Stable Version](https://img.shields.io/packagist/v/wszdb/flarum-autolock.svg)](https://packagist.org/packages/wszdb/flarum-autolock)

A Flarum extension that automatically locks discussions when they reach a specific number of posts.

## Features

- 🔒 Automatically lock discussions when they reach a configurable post threshold
- ⚙️ Easy configuration through admin panel
- 🌍 Multi-language support (English & Chinese)
- 🎯 Simple and lightweight
- 🔧 No database modifications required

## Installation

Install with composer:

```bash
composer require wszdb/flarum-autolock
```

## Usage

1. Enable the extension in your Flarum admin panel
2. Go to extension settings
3. Configure the post threshold (default: 100 posts)
4. Enable/disable the auto-lock feature as needed

## Configuration

### Admin Settings

- **Enable Auto Lock**: Toggle to enable or disable the automatic locking feature
- **Post Threshold**: Set the number of posts after which a discussion will be automatically locked (minimum: 1)

## How It Works

When a new post is created in a discussion:
1. The extension checks if auto-lock is enabled
2. If enabled, it counts the total number of posts in the discussion
3. If the count reaches or exceeds the configured threshold, the discussion is automatically locked
4. Already locked discussions are skipped

## Requirements

- Flarum 1.0 or higher
- PHP 7.4 or higher

## Links

- [GitHub Repository](https://github.com/wszdb/flarum-autolock)
- [Packagist](https://packagist.org/packages/wszdb/flarum-autolock)
- [Flarum Community](https://discuss.flarum.org)

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/wszdb/flarum-autolock/issues) on GitHub.

## License

This extension is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for the Flarum community