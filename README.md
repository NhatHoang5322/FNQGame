# FNQ Studio - Indie Game Platform Website

A modern, bilingual indie game studio website featuring game showcase, user authentication, account management, and payment integration for FNQ Studio's game releases like NEON QUEST and HARVESTAY.

![FNQ Studio](https://img.shields.io/badge/Status-Active-brightgreen)
![Language](https://img.shields.io/badge/Languages-Vietnamese%20%26%20English-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎮 Features

### User Authentication
- **User Registration**: Create new accounts with email and password
- **User Login**: Secure login with localStorage persistence
- **Account Dashboard**: View balance, transaction history, and account details
- **Logout**: Secure session termination

### Game Shop
- **Demo Version**: Free access to game preview (2 levels)
- **Full Version**: Premium game purchase with 50,000 VNĐ
- **Download Management**: Download buttons for both versions
- **Transaction History**: Track all purchases and top-ups

### Payment System
- **Multiple Payment Methods**: Credit card, Momo, ZaloPay, Bank transfer
- **QR Code Payment**: Generate QR codes for mobile payment
- **Balance Management**: Top-up balance and track spending
- **Transaction Records**: Complete history of all transactions

### Internationalization (i18n)
- **Bilingual Support**: Full Vietnamese and English translations
- **Dynamic Language Switching**: Change language instantly
- **Persistent Language Preference**: Remember user's language choice

### Game Showcase
- **HARVESTAY**: Latest farming survival game
- **NEON QUEST**: Pixel art adventure game
- **Game Features**: Detailed description of gameplay elements
- **Game Artwork**: SVG illustration support

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser
- LocalStorage enabled for user data persistence

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/fnq-studio.git
cd fnq-studio
```

2. **Open in browser**
```bash
# Simply open the index.html file in your browser
open index.html
# or
start index.html
```

3. **Serve locally (optional)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
fnq-studio/
├── index.html              # Main landing page
├── payment-message.html    # Payment success/status message
├── script.js              # JavaScript logic (auth, i18n, payments)
├── style.css              # Main stylesheet
├── gameArt.svg            # Game artwork illustration
├── README.md              # Project documentation
├── LICENSE                # MIT License
├── .gitignore             # Git ignore rules
└── package.json           # Project metadata
```

## 🔧 Configuration

### LocalStorage Keys
The application uses the following localStorage keys:
- `fnqUsers`: Stores all registered users (JSON format)
- `fnqCurrentUser`: Stores current logged-in user email
- `fnqLang`: Stores user's language preference (vi/en)

### User Object Structure
```javascript
{
  name: String,           // User's full name
  email: String,          // User's email (lowercase)
  password: String,       // Hashed password (should be encrypted in production)
  balance: Number,        // Account balance in VNĐ
  history: Array,         // Transaction history
  createdAt: Number       // Account creation timestamp
}
```

### Transaction Object Structure
```javascript
{
  type: String,          // 'topup' or 'purchase'
  amount: Number,        // Transaction amount
  label: String,         // Transaction label/description
  date: Number           // Transaction timestamp
}
```

## 🎨 Styling

The website uses a modern dark theme with:
- **Color Scheme**: Dark background with purple accents and cyan highlights
- **Typography**: Space Mono (logo), Inter (body text)
- **Effects**: Gradient backgrounds, glowing text effects, blur effects
- **Responsive**: Mobile-first design with responsive breakpoints
- **Animations**: Smooth transitions and hover effects

### CSS Variables
Define your theme by modifying CSS variables in `:root`:
```css
--bg: #09070f;                    /* Background color */
--accent: #7c3aed;               /* Primary accent (purple) */
--accent-2: #22d3ee;             /* Secondary accent (cyan) */
--text: #f5f4fb;                 /* Text color */
--muted: #9ca3ff;                /* Muted text color */
```

## 🌐 Internationalization

### Supported Languages
- **Vietnamese (vi)**: Default language
- **English (en)**: Alternative language

### Adding New Translations

Edit the `translations` object in `script.js`:

```javascript
const translations = {
    vi: {
        'key-name': 'Vietnamese text',
        // ... more translations
    },
    en: {
        'key-name': 'English text',
        // ... more translations
    }
};
```

Then use in HTML with `data-i18n` attribute:
```html
<button data-i18n="key-name">Button Text</button>
```

## 🔐 Security Notes

### Important: Production Deployment
⚠️ **This application is for demonstration purposes only.** Before deploying to production:

1. **Password Hashing**: Implement proper password hashing (bcrypt, argon2)
2. **Backend Authentication**: Move auth logic to secure backend
3. **HTTPS**: Always use HTTPS for data transmission
4. **Input Validation**: Validate all user inputs on both client and server
5. **CSRF Protection**: Implement CSRF tokens for form submissions
6. **Database**: Replace localStorage with secure database
7. **Payment Gateway**: Integrate with real payment providers (Stripe, Momo API, etc.)
8. **Environment Variables**: Store sensitive data in environment variables
9. **API Keys**: Never expose API keys in front-end code

## 💰 Payment Methods Integration

### Currently Implemented
- QR Code generation (visual placeholder)
- Payment method selection UI
- Balance management system

### To Implement (Backend Required)
- Momo Payment API integration
- ZaloPay API integration
- Bank transfer integration
- Credit card processor (Stripe/similar)

## 🎯 Usage Examples

### Register a New Account
1. Click "Register" button
2. Enter name, email, and password
3. Confirm password
4. Account created with 100,000 VNĐ starting balance

### Purchase a Game
1. Login to your account
2. Click "Buy game 50k"
3. Game shop opens with two versions:
   - Demo (Free): 2 levels
   - Full (50,000 VNĐ): Complete game
4. Choose and click download button
5. Transaction recorded in history

### Top Up Balance
1. Click "Top up 100k" button
2. Select payment method
3. Scan QR code with phone
4. Confirm payment
5. Balance updated immediately

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines
- Follow existing code style
- Add comments for complex logic
- Test in multiple browsers
- Update README if adding features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**FNQ Studio** - *A small studio with a huge pixel heart*

- Website: Coming soon
- Contact: contact@fnqstudio.com
- GitHub: [@fnqstudio](https://github.com/fnqstudio)

## 🐛 Troubleshooting

### Data Not Persisting
- **Issue**: User data disappears after page refresh
- **Solution**: Check if localStorage is enabled in browser settings

### Language Not Changing
- **Issue**: Translations not updating
- **Solution**: Ensure `data-i18n` attributes are set correctly in HTML

### Payment QR Code Not Showing
- **Issue**: QR code container is empty
- **Solution**: Make sure qrcode.js CDN is properly loaded

### Form Validation Issues
- **Issue**: Login/Register forms not working
- **Solution**: Check browser console for errors, verify email format

## 🗺️ Roadmap

### Planned Features
- [ ] Backend API integration
- [ ] Real payment gateway integration
- [ ] User profile customization
- [ ] Game reviews and ratings
- [ ] Community forum
- [ ] Multiplayer features
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard
- [ ] Email verification
- [ ] Two-factor authentication

### Performance Improvements
- [ ] Lazy loading for images
- [ ] Code minification and bundling
- [ ] Service Worker for offline support
- [ ] Caching strategy optimization

## ❓ FAQ

**Q: Can I use this for my own game studio?**
A: Yes! The code is open-source under MIT license. Customize the branding and deploy.

**Q: Is this production-ready?**
A: No, this is a frontend demo. You'll need a backend and proper payment gateway for production.

**Q: How do I add my own games?**
A: Edit the game showcase section in `index.html` and add translations in `script.js`.

**Q: Can I use this as a template?**
A: Absolutely! Feel free to fork and customize.

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: ✅ Active Development
