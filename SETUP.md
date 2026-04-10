# FNQ Studio - Setup & Quick Start Guide

## 🚀 Quick Start (5 minutes)

### Option 1: Open Directly
```bash
# Simply open index.html in your browser
# No setup required!
```

### Option 2: Local Development Server

**Using Python:**
```bash
cd path/to/fnq-studio
python -m http.server 8000
# Visit: http://localhost:8000
```

**Using Node.js:**
```bash
npx http-server
# Visit: http://localhost:8000
```

**Using PHP:**
```bash
php -S localhost:8000
# Visit: http://localhost:8000
```

---

## 📱 Testing the Application

### Create Test Account
1. Click **Register** button
2. Enter credentials:
   - **Name:** Test User
   - **Email:** test@fnq.com
   - **Password:** test123
3. Account created with **100,000 VNĐ** balance

### Test Features
1. **Buy Game:**
   - Click "Buy game 50k" in account dropdown
   - Choose Full Version
   - Deduction visible in balance

2. **Top Up Balance:**
   - Click "Top up 100k" in account dropdown
   - Select payment method
   - Scan QR code (demo)
   - Balance increases by 100k

3. **Switch Language:**
   - Click Vietnamese/English buttons in header
   - All content updates instantly

4. **View History:**
   - Open account dropdown
   - See all transactions

---

## 📂 Project Structure

```
fnq-studio/
├── 📄 index.html              # ← Start here! Main page
├── 📄 payment-message.html    # Payment status page
├── 📜 script.js              # Core JavaScript logic
├── 🎨 style.css              # Styling & responsive design
├── 🖼️  gameArt.svg            # Game artwork
│
├── 📋 README.md              # Full documentation
├── 📋 CONTRIBUTING.md        # How to contribute
├── 📋 CHANGELOG.md           # Version history
├── 📋 SETUP.md               # This file
│
├── ⚖️  LICENSE                # MIT License
├── 📦 package.json           # Project metadata
│
├── 🔧 .gitignore             # Git configuration
├── 🔧 .editorconfig          # Editor settings
├── 🔧 .prettierrc            # Code formatting
```

---

## 🔗 GitHub Setup (Push Your Code)

### 1. Initialize Git Repository
```bash
cd c:/Users/Admin/Desktop/Duanwed
git init
git add .
git commit -m "Initial commit: FNQ Studio platform website v1.0.0"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `fnq-studio`
3. Description: `Indie game studio website with user authentication, game shop, and payment system`
4. Choose Public (for showcase) or Private
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### 3. Connect & Push
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fnq-studio.git
git push -u origin main
```

### 4. Update Repository URL
In `package.json`, update:
```json
"repository": {
  "url": "https://github.com/YOUR-USERNAME/fnq-studio.git"
}
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

### Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages" section
3. Select **Source:** `main` branch
4. Select folder: `/root`
5. Save

Your site will be live at: `https://YOUR-USERNAME.github.io/fnq-studio/`

---

## 💾 Data Persistence

User data is stored in **browser localStorage**:
- `fnqUsers` - All registered users
- `fnqCurrentUser` - Currently logged in user
- `fnqLang` - Language preference

⚠️ **Note:** Data is local to each browser. Different browsers = different users.

### Clear All Data
Open browser console (F12) and run:
```javascript
localStorage.clear();
location.reload();
```

---

## 🧪 Browser DevTools

### Check Stored Data
```javascript
// View all users
JSON.parse(localStorage.getItem('fnqUsers'))

// View current user
localStorage.getItem('fnqCurrentUser')

// View language
localStorage.getItem('fnqLang')
```

### Clear Specific User
```javascript
let users = JSON.parse(localStorage.getItem('fnqUsers'));
delete users['email@example.com'];
localStorage.setItem('fnqUsers', JSON.stringify(users));
```

---

## 📸 Screenshots & Branding

### Required Assets (Already Included)
- ✅ `gameArt.svg` - Game artwork (640x360px recommended)

### To Add Custom Branding
1. Replace `gameArt.svg` with your own
2. Update color variables in `style.css`:
   ```css
   :root {
       --accent: #yourColor;
       --accent-2: #anotherColor;
   }
   ```
3. Change studio name in `index.html`

---

## 🔐 Security Notes

### Before Production Deployment ⚠️

1. **Password Security**
   ```javascript
   // Current: Plain text (demo only)
   // Production: Use bcrypt or similar
   ```

2. **Move to Backend:**
   - Authentication → Backend API
   - Payment processing → Secure server
   - User data → Database

3. **Use HTTPS:** Always in production

4. **Environment Variables:**
   ```bash
   PAYMENT_API_KEY=your_key
   BACKEND_URL=your_api
   ```

---

## 📞 Support & Troubleshooting

### Common Issues

**Q: Page shows blank**
- A: Browser cache issue → Clear cache & reload

**Q: Data not persisting**
- A: localStorage disabled → Check browser settings

**Q: QR code not showing**
- A: CDN issue → Check network tab in DevTools

**Q: Translations not updating**
- A: Missing `data-i18n` attribute → Check HTML

### Get Help
- 📖 Read [README.md](README.md)
- 🤝 Check [CONTRIBUTING.md](CONTRIBUTING.md)
- 📋 Review [CHANGELOG.md](CHANGELOG.md)
- 💬 Open GitHub Issue

---

## 📚 Learning Resources

### For This Project
- HTML: Semantic structure for better SEO
- CSS: Modern Grid/Flexbox layout
- JavaScript: Event handling, localStorage, i18n
- Git: Version control basics

### Helpful Links
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Git Documentation](https://git-scm.com/doc)

---

## 🎯 Next Steps

1. ✅ Test the application locally
2. ✅ Review code and documentation
3. ✅ Push to GitHub
4. ✅ Enable GitHub Pages
5. ✅ Share with friends!

---

**Happy coding! 🚀** 

Made with ❤️ by FNQ Studio
