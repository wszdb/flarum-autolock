# Changelog

All notable changes to this project will be documented in this file.

## [2.0.1] - 2025-10-07

### Fixed
- Fixed forum initialization error caused by app.forum.attribute call
- Removed unnecessary setting serialization to frontend
- Settings are now only used in backend PHP listener
## [1.0.0] - 2025-10-07

### Added
- Initial release
- Automatic discussion locking when post count reaches threshold
- Admin panel settings for enable/disable and threshold configuration
- Support for English and Simplified Chinese
- Event-driven architecture using Flarum's Posted event
