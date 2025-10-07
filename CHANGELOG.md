# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-07

### Added
- Initial release
- Automatic discussion locking when post threshold is reached
- Admin panel settings for configuring post threshold
- Enable/disable toggle for auto-lock feature
- Multi-language support (English and Chinese)
- Event listener for post creation
- Frontend admin interface
- Comprehensive documentation

### Features
- Configurable post threshold (default: 100)
- Automatic locking without manual intervention
- Respects already locked discussions
- Simple and lightweight implementation

## [Unreleased]

### Planned
- Option to send notification when discussion is auto-locked
- Exclude specific tags or categories from auto-lock
- Role-based exemptions (e.g., moderators can post beyond threshold)
- Statistics dashboard showing auto-locked discussions
- Custom lock message template

---

[1.0.0]: https://github.com/wszdb/flarum-autolock/releases/tag/v1.0.0