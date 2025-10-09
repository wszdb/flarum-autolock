# Changelog

All notable changes to this project will be documented in this file.

## [2.2.0] - 2025-01-09

### Added
- 🏷️ Tag exemption feature: Configure specific tags to be exempt from auto-locking
- 🎛️ Multi-tag selector in admin panel for easy configuration
- 📝 Enhanced documentation with tag exemption examples
- 🌐 Translation support for new features (English & Chinese)

### Changed
- 🔧 Updated PostedListener to check exempt tags before locking
- 🎨 Improved admin UI with checkbox-based tag selector
- 📋 Enhanced logging to include tag exemption checks

### Technical Details
- Added `wszdb-autolock.exempt_tags` setting (JSON array of tag IDs)
- Tag exemption check runs before threshold validation
- Discussions with any exempt tag will skip auto-lock
- Backward compatible with existing installations

## [2.1.0] - 2024-10-07

### Added
- Initial release
- Automatic discussion locking based on post count
- Configurable threshold setting
- Enable/disable toggle
- Multi-language support (English & Chinese)
- Detailed logging system

[2.2.0]: https://github.com/wszdb/flarum-autolock/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/wszdb/flarum-autolock/releases/tag/v2.1.0