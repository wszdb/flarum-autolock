# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2025-10-07

### Fixed
- **Critical**: Fixed post count calculation using `comment_count + 1` for accurate total posts
- Fixed PSR-3 Logger injection (replaced Facade with LoggerInterface)
- Fixed forum.js initialization error
- Extension now works correctly in production environment

### Changed
- Improved logging with cleaner output
- Added discussion refresh to ensure latest data
- Optimized error handling

### Technical Details
- Use `$discussion->comment_count + 1` instead of `$discussion->post_number_index`
- Inject `Psr\Log\LoggerInterface` instead of using `Illuminate\Support\Facades\Log`
- Total posts = comment_count (replies) + 1 (original post)

## [2.0.2] - 2025-10-07

### Fixed
- Initial fix attempts for post count calculation

## [2.0.1] - 2025-10-07

### Fixed
- Fixed forum initialization error caused by app.forum.attribute call
- Removed unnecessary setting serialization to frontend

## [1.0.0] - 2025-10-07

### Added
- Initial release
- Automatic discussion locking when post count reaches threshold
- Admin panel settings for enable/disable and threshold configuration
- Support for English and Simplified Chinese
- Event-driven architecture using Flarum's Posted event
