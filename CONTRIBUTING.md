# Contributing to FNQ Studio

Thank you for your interest in contributing to FNQ Studio! We welcome contributions from everyone. Here's how you can help:

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/fnq-studio.git
   cd fnq-studio
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes**
   - Write clean, well-commented code
   - Follow the existing code style
   - Test your changes in multiple browsers

4. **Commit your changes**
   ```bash
   git commit -m "Add descriptive message about your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Create a Pull Request**
   - Describe what you've changed and why
   - Reference any related issues
   - Include screenshots if UI changes are made

## Code Guidelines

### JavaScript
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing structure and patterns
- Use arrow functions where appropriate
- Keep functions focused and single-purpose

### CSS
- Follow the existing color scheme and variables
- Use meaningful class names (BEM notation preferred)
- Keep responsive design in mind
- Comment sections and complex rules
- Maintain the dark theme consistency

### HTML
- Use semantic HTML elements
- Add `data-i18n` attributes for all user-facing text
- Include alt text for images
- Keep structure organized and readable

## Translation Contributions

To add or improve translations:

1. Edit the `translations` object in `script.js`
2. Add new language strings or update existing ones
3. Test in both Vietnamese and English
4. Ensure consistency with existing terminology

## Reporting Issues

If you find a bug or have a suggestion:

1. **Check existing issues** - Avoid duplicates
2. **Create a detailed issue** including:
   - Clear description of the problem/suggestion
   - Steps to reproduce (for bugs)
   - Browser and OS you're using
   - Screenshots or error messages if applicable

## Feature Requests

Have an idea? We'd love to hear it!

1. **Describe the feature** - What should it do?
2. **Explain the benefit** - Why is it needed?
3. **Provide examples** - Mock-ups, screenshots, or descriptions
4. **Consider implementation** - How could it be built?

## Testing

Before submitting a PR, please test:

- ✅ All pages load correctly
- ✅ Forms validate and submit properly
- ✅ Translations work in both languages
- ✅ Responsive design on mobile devices (375px, 768px, 1920px)
- ✅ No console errors or warnings
- ✅ Links and buttons work as expected
- ✅ LocalStorage persistence works

### Browser Testing
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Development Setup

### Local Server (Recommended)

```bash
# Python 3
python -m http.server 8000

# or Node.js
npx http-server

# or PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Project Structure

```
fnq-studio/
├── index.html              # Main page
├── payment-message.html    # Payment page
├── script.js              # JavaScript logic
├── style.css              # Stylesheet
├── gameArt.svg            # Game artwork
├── README.md              # Documentation
├── CONTRIBUTING.md        # This file
├── LICENSE                # MIT License
└── .gitignore             # Git ignore rules
```

## Commit Message Convention

Use clear, descriptive commit messages:

```
feat: Add new feature
fix: Fix specific bug
docs: Update documentation
style: Fix code style
refactor: Refactor existing code
test: Add or update tests
chore: Update dependencies
```

Example:
```
feat: Add Spanish language support
fix: Fix account dropdown positioning on mobile
docs: Update installation instructions
```

## Code Review Process

1. One or more maintainers will review your PR
2. Address any requested changes
3. Once approved, your code will be merged
4. You'll be credited in the project

## Questions?

- 📧 Email: contact@fnqstudio.com
- 💬 Create an issue with label `question`
- 📖 Check existing issues and discussions

## Code of Conduct

We're committed to providing a welcoming and inclusive environment:

- Be respectful and constructive
- Give credit where it's due
- Ask for help when needed
- Avoid harassment or discrimination
- Report violations to the maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to FNQ Studio!** 🎮✨
