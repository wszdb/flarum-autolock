# Contributing to Flarum Auto Lock

Thank you for your interest in contributing to this project! 🎉

## Development Setup

### Prerequisites

- PHP 7.4 or higher
- Composer
- Node.js 14 or higher
- npm or yarn
- A local Flarum installation for testing

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/wszdb/flarum-autolock.git
cd flarum-autolock
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install JavaScript dependencies:
```bash
cd js
npm install
```

4. Build the frontend assets:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run dev
```

### Testing the Extension

1. Link the extension to your local Flarum installation:
```bash
cd /path/to/your/flarum
composer require wszdb/flarum-autolock:*@dev
```

2. Create a `composer.json` repository entry pointing to your local development directory:
```json
{
  "repositories": [
    {
      "type": "path",
      "url": "/path/to/flarum-autolock"
    }
  ]
}
```

3. Enable the extension:
```bash
php flarum extension:enable wszdb-autolock
```

## Code Style

- Follow PSR-12 coding standards for PHP
- Use ESLint configuration for JavaScript
- Keep code clean and well-documented

## Pull Request Process

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Reporting Issues

When reporting issues, please include:
- Flarum version
- PHP version
- Extension version
- Steps to reproduce
- Expected vs actual behavior
- Any error messages or logs

## Questions?

Feel free to open an issue for any questions or discussions!