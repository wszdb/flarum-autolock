# Contributing to Flarum Auto Lock

Thank you for considering contributing to this extension! 🎉

## Development Setup

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+ and npm (for building JavaScript)
- Git

### Local Development

1. **Fork the repository**
```bash
git clone https://github.com/YOUR_USERNAME/flarum-autolock.git
cd flarum-autolock
```

2. **Install dependencies**
```bash
composer install
npm install  # If you plan to modify JavaScript
```

3. **Link to local Flarum installation**
```bash
cd /path/to/flarum
composer require wszdb/flarum-autolock:*@dev
# Create symlink to your development directory
```

## Code Standards

### PHP Code Style

- Follow PSR-12 coding standards
- Use meaningful variable and method names
- Add PHPDoc comments for all methods
- Keep methods focused and single-purpose

**Example:**
```php
/**
 * Check if discussion should be locked
 *
 * @param Discussion $discussion
 * @param int $threshold
 * @return bool
 */
protected function shouldLock(Discussion $discussion, int $threshold): bool
{
    return !$discussion->is_locked && $discussion->post_number_index >= $threshold;
}
```

### JavaScript Code Style

- Use TypeScript for source files
- Follow Flarum's frontend conventions
- Compile to webpack IIFE format for distribution
- Test in both admin and forum contexts

### YAML Syntax

- Always quote values containing colons `:`
- Always quote values containing curly braces `{}`
- Use 2-space indentation
- Maintain alphabetical order within sections

## Building JavaScript

If you modify TypeScript source files:

```bash
npm run build
```

This will generate the compiled files in `js/dist/`.

## Testing

### Manual Testing

1. Install extension in a test Flarum instance
2. Test admin panel settings
3. Create discussions and verify auto-locking
4. Test with different threshold values
5. Verify language translations

### Automated Testing (Future)

We plan to add:
- PHPUnit tests for PHP logic
- Jest tests for JavaScript
- Integration tests

## Submitting Changes

### Pull Request Process

1. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Update CHANGELOG.md

3. **Test thoroughly**
   - Test all modified functionality
   - Verify no regressions
   - Check in multiple browsers (for JS changes)

4. **Commit with clear messages**
```bash
git commit -m "Add feature: description of feature"
```

5. **Push and create PR**
```bash
git push origin feature/your-feature-name
```

6. **Fill out PR template**
   - Describe what changed
   - Link related issues
   - Add screenshots if UI changed

### Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues: "Fix #123: Description"

**Examples:**
```
Add threshold validation in admin panel
Fix issue with locked discussions counting
Update Chinese translations for clarity
Refactor PostedListener for better performance
```

## Reporting Bugs

### Before Submitting

- Check existing issues
- Test with latest Flarum version
- Disable other extensions to isolate issue

### Bug Report Template

```markdown
**Flarum Version**: 1.8.10
**PHP Version**: 8.2.0
**Extension Version**: 1.0.0

**Description**:
Clear description of the bug

**Steps to Reproduce**:
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**:
What should happen

**Actual Behavior**:
What actually happens

**Screenshots**:
If applicable

**Additional Context**:
Any other relevant information
```

## Feature Requests

We welcome feature suggestions! Please:

1. Check if already requested
2. Describe the use case
3. Explain why it's valuable
4. Suggest implementation if possible

## Code Review Process

1. Maintainers review PRs within 7 days
2. Feedback provided via PR comments
3. Changes requested if needed
4. Approval required before merge
5. Squash and merge into main branch

## Release Process

1. Update version in `composer.json`
2. Update CHANGELOG.md
3. Create Git tag
4. Push to GitHub
5. Packagist auto-updates

## Questions?

- Open a discussion on GitHub
- Join Flarum Community forum
- Email: your-email@example.com

---

Thank you for contributing! 🙏
