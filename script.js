/**
 * FNQ Studio - Game Studio Website
 * Main JavaScript File
 * 
 * Features:
 * - User authentication (login/register)
 * - Bilingual support (Vietnamese/English)
 * - Game shop management
 * - Payment system with QR codes
 * - Account dashboard with transaction history
 * 
 * @version 1.0.0
 * @author FNQ Studio
 */

// ============================================================================
// STORAGE & CONFIGURATION
// ============================================================================

/** Storage keys for localStorage persistence */
const STORAGE_KEYS = {
    users: 'fnqUsers',
    current: 'fnqCurrentUser',
    lang: 'fnqLang'
};

/** Current active language */
let currentLang = 'vi';

// ============================================================================
// TRANSLATIONS (i18n)
// ============================================================================

/**
 * Multi-language translation strings
 * Supports Vietnamese (vi) and English (en)
 */
const translations = {
    vi: {
        'nav-home': 'Trang chủ',
        'nav-features': 'Tính năng',
        'nav-lore': 'Câu chuyện',
        'hero-eyebrow': 'Phiêu lưu Retro',
        'hero-title': 'CHÚNG TÔI LÀ FNQ',
        'hero-tagline': 'Studio nhỏ với trái tim pixel lớn — trải nghiệm thế giới indie tiếp theo.',
        'btn-explore': 'Khám phá',
        'btn-story': 'Câu chuyện',
        'btn-login': 'Đăng nhập',
        'btn-register': 'Đăng ký',
        'btn-logout': 'Đăng xuất',
        'btn-topup': 'Nạp 100k',
        'btn-buy-game': 'Mua game 50k',
        'buy-success': 'Mua game thành công! Tiền đã được trừ.',
        'buy-error': 'Không đủ tiền để mua game.',
        'confirm-purchase': 'Xác nhận mua Neon Quest với giá 50,000 VNĐ?',
        'purchase-cancelled': 'Giao dịch đã bị hủy.',
        'features-title': 'Cảm hứng game, Tinh thần studio',
        'feature-1-title': 'Pixel Art',
        'feature-1-text': 'Hình ảnh thủ công với bảng màu đậm và ánh sáng huyền ảo.',
        'feature-2-title': 'Âm thanh sống động',
        'feature-2-text': 'Âm thanh đập theo nhịp của những cuộc phiêu lưu ngầm.',
        'feature-3-title': 'Câu chuyện đậm chất',
        'feature-3-text': 'Mỗi sản phẩm là một hành trình, một thế giới để khám phá và cảm nhận.',
        'lore-title': 'Từ studio đến màn hình',
        'lore-text': 'FNQ là một đội ngũ mơ mộng tập trung tạo ra những trò chơi nhỏ nhưng táo bạo với nhịp điệu hoài niệm. Chúng tôi xây dựng trải nghiệm thủ công, bí ẩn và khó quên.',
        'stat-1-label': 'Dự án đã hoàn thành',
        'stat-2-label': 'Người chơi tham gia',
        'stat-3-label': 'Năng lượng indie',
        'footer-text': '© 2026 FNQ Studio — Dành cho người chơi cuồng nhiệt.',
        'account-banner': 'Tạo tài khoản để mua game, nạp tiền và mở khóa tính năng.',
        'account-welcome-user': 'Chào {name}, bạn có thể mua game và nạp tiền ngay bây giờ.',
        'account-panel-title': 'Tài khoản người chơi',
        'account-panel-user': 'Tên người dùng:',
        'account-panel-balance': 'Số dư:',
        'history-title': 'Lịch sử',
        'history-empty': 'Chưa có giao dịch.',
        'btn-back': 'Quay lại Trang chủ',
        'shop-title': 'NEON QUEST',
        'shop-subtitle': 'Chọn trải nghiệm của bạn và bắt đầu cuộc phiêu lưu',
        'demo-title': 'Phiên bản Demo',
        'demo-badge': 'MIỄN PHÍ',
        'demo-desc': 'Trải nghiệm 2 level đầu tiên của game hoàn toàn miễn phí.',
        'demo-feature-1': '✓ 2 level có thể chơi',
        'demo-feature-2': '✓ Toàn bộ nhạc nền',
        'demo-feature-3': '✓ Phần giới thiệu câu chuyện',
        'full-title': 'Phiên bản Đầy đủ',
        'full-badge': '50K VNĐ',
        'full-desc': 'Mở khóa toàn bộ trò chơi với tất cả cấp độ, tính năng và nội dung độc quyền.',
        'full-feature-1': '✓ Tất cả 10 level',
        'full-feature-2': '✓ Nhân vật được mở khóa',
        'full-feature-3': '✓ Nhạc nền độc quyền',
        'full-feature-4': '✓ Giảm 30% cho bản phát hành tiếp theo',
        'btn-download': 'Tải Demo',
        'btn-buy-download': 'Mua & Tải',
        'download-success': 'Tải xuống thành công! Cảm ơn bạn đã chơi FNQ Studio.',
        'login-title': 'Đăng nhập FNQ',
        'register-title': 'Tạo tài khoản mới',
        'label-name': 'Họ tên',
        'label-email': 'Email',
        'label-password': 'Mật khẩu',
        'label-confirm': 'Xác nhận mật khẩu',
        'login-success': 'Đăng nhập thành công! Chúc bạn chơi vui.',
        'register-success': 'Đăng ký thành công, bạn đã được đăng nhập tự động.',
        'login-error': 'Email hoặc mật khẩu không đúng.',
        'register-error': 'Email này đã được sử dụng. Vui lòng thử email khác.',
        'error-password-match': 'Mật khẩu và xác nhận phải giống nhau.',
        'topup-success': 'Nạp tiền thành công! Số dư đã được cập nhật.',
        'logoff-message': 'Bạn đã đăng xuất. Đăng nhập lại để tiếp tục.',
        'forgot-password-link': 'Quên mật khẩu?',
        'forgot-title': 'Quên mật khẩu',
        'btn-reset': 'Gửi yêu cầu',
        'reset-success': 'Mật khẩu đã được gửi đến email của bạn.',
        'reset-error': 'Email không tồn tại.',
        'admin-title': 'Quản lý tài khoản',
        'admin-users-title': 'Danh sách người dùng',
        'admin-th-name': 'Tên',
        'admin-th-email': 'Email',
        'admin-th-balance': 'Số dư',
        'admin-th-actions': 'Hành động',
        'btn-admin': 'Admin',
        'btn-edit': 'Sửa',
        'btn-delete': 'Xóa',
        'recharge-title': 'NẠP TIỀN',
        'recharge-subtitle': 'Chọn phương thức thanh toán để nạp tiền vào tài khoản của bạn',
        'payment-credit': 'Thẻ Tín dụng',
        'payment-credit-desc': 'Visa, Mastercard',
        'payment-momo': 'Momo',
        'payment-momo-desc': 'Ví điện tử Momo',
        'payment-zalo': 'ZaloPay',
        'payment-zalo-desc': 'Ví điện tử ZaloPay',
        'payment-bank': 'Chuyển khoản',
        'payment-bank-desc': 'Ngân hàng trực tuyến',
        'btn-select': 'Chọn',
        'qr-payment-title': 'Thanh toán qua QR',
        'qr-instruction': 'Quét mã QR bằng điện thoại của bạn để thanh toán',
        'qr-amount-label': 'Số tiền nạp:',
        'qr-confirm-btn': 'Xác nhận thanh toán',
        'qr-cancel-btn': 'Hủy',
        'payment-success': 'Thanh toán thành công! +100,000 VNĐ',
        'placeholder-email': 'name@domain.com',
        'placeholder-name': 'Alex Nguyen',
        'placeholder-password': '••••••••',
        'placeholder-confirm': '••••••••',
        'showcase-title': 'HARVESTAY — Bản phát hành mới nhất của chúng tôi',
        'showcase-subtitle': 'Tồn tại thông qua trồng trọt. Xây dựng. Thích nghi. Phát triển.',
        'game-title': 'Một cuộc phiêu lưu sinh tồn trồng trọt',
        'game-desc': 'Trong một thế giới nơi nền văn minh sụp đổ, hy vọng duy nhất của bạn nằm ở đất dưới chân. Trồng cây trồng, nuôi gia súc và xây dựng nơi trú ẩn của bạn trong khi chống chọi thời tiết khắc nghiệt, dịch bệnh và các yếu tố khác.',
        'feature-farming': 'Trồng trọt năng động',
        'feature-farming-desc': 'Trồng, tăng trưởng và thu hoạch hàng chục loại cây với chu kỳ mùa thực tế.',
        'feature-animals': 'Chăn nuôi động vật',
        'feature-animals-desc': 'Nuôi gà, bò và cừu để mở rộng chiến lược sinh tồn của bạn.',
        'feature-building': 'Xây dựng cơ sở',
        'feature-building-desc': 'Xây dựng và nâng cấp các cấu trúc để tồn tại những thời tiết khắc nghiệt.',
        'feature-challenge': 'Thách thức chiến lược',
        'feature-challenge-desc': 'Đối mặt với hạn hán, lũ lụt, dịch bệnh và quản lý tài nguyên một cách khôn ngoan.',
        'btn-play-now': 'Chơi ngay',
        'btn-learn-more': 'Tìm hiểu thêm'
    },
    en: {
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-lore': 'Lore',
        'hero-eyebrow': 'Retro Adventure',
        'hero-title': 'WE ARE FNQ',
        'hero-tagline': 'A small studio with a huge pixel heart — experience the next indie world.',
        'btn-explore': 'Explore',
        'btn-story': 'Our Story',
        'btn-login': 'Login',
        'btn-register': 'Register',
        'btn-logout': 'Logout',
        'btn-topup': 'Top up 100k',
        'btn-buy-game': 'Buy game 50k',
        'buy-success': 'Game purchased successfully! Your balance has been updated.',
        'buy-error': 'Not enough balance to buy the game.',
        'confirm-purchase': 'Confirm purchase of Neon Quest for 50,000 VNĐ?',
        'purchase-cancelled': 'Transaction cancelled.',
        'features-title': 'Game Vibes, Studio Soul',
        'feature-1-title': 'Pixel Art',
        'feature-1-text': 'Handcrafted visuals with rich color palettes and moody lighting.',
        'feature-2-title': 'Immersive Audio',
        'feature-2-text': 'Soundscapes that pulse with the rhythm of underground adventures.',
        'feature-3-title': 'Story Driven',
        'feature-3-text': 'Every release has a narrative thread, a world to explore, and a soul to feel.',
        'lore-title': 'From Studio to Screen',
        'lore-text': 'FNQ is a team of dreamers focused on creating bold, small-scale games with a familiar, nostalgic pulse. We build experiences that feel handcrafted, mysterious, and unforgettable.',
        'stat-1-label': 'Projects built',
        'stat-2-label': 'Players joined',
        'stat-3-label': 'Indie energy',
        'footer-text': '© 2026 FNQ Studio — Built for those who play loud.',
        'account-banner': 'Create an account to buy games, top up balance, and unlock features.',
        'account-welcome-user': 'Welcome {name}, you can now buy games and top up your balance.',
        'account-panel-title': 'Player Account',
        'account-panel-user': 'Username:',
        'account-panel-balance': 'Balance:',
        'history-title': 'History',
        'history-empty': 'No transactions yet.',
        'btn-back': 'Back to Home',
        'shop-title': 'NEON QUEST',
        'shop-subtitle': 'Choose your experience and begin the adventure',
        'demo-title': 'Demo Version',
        'demo-badge': 'FREE',
        'demo-desc': 'Experience the first 2 levels of the game completely free.',
        'demo-feature-1': '✓ 2 playable levels',
        'demo-feature-2': '✓ Full soundtrack',
        'demo-feature-3': '✓ Story intro',
        'full-title': 'Full Version',
        'full-badge': '50K VNĐ',
        'full-desc': 'Unlock the complete game with all levels, features, and exclusive content.',
        'full-feature-1': '✓ All 10 levels',
        'full-feature-2': '✓ Unlocked characters',
        'full-feature-3': '✓ Exclusive soundtrack',
        'full-feature-4': '✓ 30% discount on next release',
        'btn-download': 'Download Demo',
        'btn-buy-download': 'Buy & Download',
        'download-success': 'Download successful! Thank you for playing FNQ Studio.',
        'login-title': 'Login to FNQ',
        'register-title': 'Create an Account',
        'label-name': 'Full Name',
        'label-email': 'Email',
        'label-password': 'Password',
        'label-confirm': 'Confirm Password',
        'login-success': 'Login successful! Enjoy the experience.',
        'register-success': 'Registration completed and logged in automatically.',
        'login-error': 'Email or password is incorrect.',
        'register-error': 'This email is already registered. Try another one.',
        'error-password-match': 'Password and confirmation must match.',
        'topup-success': 'Top up successful! Balance updated.',
        'logoff-message': 'You have signed out. Log in again to continue.',
        'forgot-password-link': 'Forgot password?',
        'forgot-title': 'Forgot Password',
        'btn-reset': 'Send Request',
        'reset-success': 'Password has been sent to your email.',
        'reset-error': 'Email does not exist.',
        'admin-title': 'Account Management',
        'admin-users-title': 'User List',
        'admin-th-name': 'Name',
        'admin-th-email': 'Email',
        'admin-th-balance': 'Balance',
        'admin-th-actions': 'Actions',
        'btn-admin': 'Admin',
        'btn-edit': 'Edit',
        'btn-delete': 'Delete',
        'recharge-title': 'TOP UP',
        'recharge-subtitle': 'Choose a payment method to add money to your account',
        'payment-credit': 'Credit Card',
        'payment-credit-desc': 'Visa, Mastercard',
        'payment-momo': 'Momo',
        'payment-momo-desc': 'Momo e-wallet',
        'payment-zalo': 'ZaloPay',
        'payment-zalo-desc': 'ZaloPay e-wallet',
        'payment-bank': 'Bank Transfer',
        'payment-bank-desc': 'Online banking',
        'btn-select': 'Select',
        'qr-payment-title': 'QR Payment',
        'qr-instruction': 'Scan the QR code with your phone to pay',
        'qr-amount-label': 'Amount to top up:',
        'qr-confirm-btn': 'Confirm Payment',
        'qr-cancel-btn': 'Cancel',
        'payment-success': 'Payment successful! +100,000 VNĐ',
        'placeholder-email': 'name@domain.com',
        'placeholder-name': 'Alex Nguyen',
        'placeholder-password': '••••••••',
        'placeholder-confirm': '••••••••',
        'showcase-title': 'HARVESTAY — Our Latest Release',
        'showcase-subtitle': 'Survive through cultivation. Build. Adapt. Thrive.',
        'game-title': 'A Farming Survival Adventure',
        'game-desc': 'In a world where civilization has collapsed, your only hope lies in the soil beneath your feet. Cultivate crops, raise livestock, and build your sanctuary while battling harsh weather, diseases, and the elements.',
        'feature-farming': 'Dynamic Farming',
        'feature-farming-desc': 'Plant, grow, and harvest dozens of crops with realistic seasonal cycles.',
        'feature-animals': 'Animal Husbandry',
        'feature-animals-desc': 'Raise chickens, cows, and sheep to expand your survival strategy.',
        'feature-building': 'Base Building',
        'feature-building-desc': 'Construct and upgrade structures to survive extreme weather and threats.',
        'feature-challenge': 'Strategic Challenges',
        'feature-challenge-desc': 'Face droughts, floods, plagues, and manage your resources wisely.',
        'btn-play-now': 'Play Now',
        'btn-learn-more': 'Learn More'
    }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format number as Vietnamese currency
 * @param {number} value - The value to format
 * @returns {string} Formatted currency string
 */
const formatCurrency = (value) => new Intl.NumberFormat('vi-VN').format(value);

// ============================================================================
// LOCALSTORAGE MANAGEMENT
// ============================================================================

/**
 * Retrieve all registered users from localStorage
 * @returns {Object} Users object with email as key
 */
const getUsers = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '{}');
    } catch (error) {
        console.error('Error reading users from localStorage:', error);
        return {};
    }
};

/**
 * Save users object to localStorage
 * @param {Object} users - Users object to save
 */
const saveUsers = (users) => {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
};

/**
 * Get currently logged-in user's email
 * @returns {string|null} Current user email or null
 */
const getCurrentUser = () => localStorage.getItem(STORAGE_KEYS.current);

/**
 * Set current logged-in user
 * @param {string} email - User's email to set as current
 */
const setCurrentUser = (email) => localStorage.setItem(STORAGE_KEYS.current, email);

/**
 * Clear current user session
 */
const clearCurrentUser = () => localStorage.removeItem(STORAGE_KEYS.current);

/**
 * Get profile of a specific user by email
 * @param {string} email - User's email (converted to lowercase)
 * @returns {Object|null} User profile object or null if not found
 */
const getUserProfile = (email) => {
    const users = getUsers();
    return users[email.toLowerCase()] || null;
};

// ============================================================================
// LANGUAGE & TRANSLATION FUNCTIONS
// ============================================================================

/**
 * Set language and update all translated elements
 * @param {string} lang - Language code ('vi' or 'en')
 */
const setLanguage = (lang) => {
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update language toggle buttons
    document.querySelectorAll('.language-toggle button').forEach((btn) => {
        btn.classList.toggle('active', btn.id === `lang-${lang}`);
    });

    // Save language preference
    localStorage.setItem(STORAGE_KEYS.lang, lang);
};

// ============================================================================
// MODAL MANAGEMENT
// ============================================================================

/**
 * Display a modal dialog
 * @param {string} modalId - ID of the modal to show
 */
const showModal = (modalId) => {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById(modalId).classList.remove('hidden');
};

/**
 * Hide a specific modal
 * @param {string} modalId - ID of the modal to hide
 */
const hideModal = (modalId) => {
    document.getElementById(modalId).classList.add('hidden');
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.add('hidden');
    clearFormMessages();
};

/**
 * Hide all active modals
 */
const hideAllModals = () => {
    ['login-modal', 'register-modal', 'forgot-modal'].forEach((id) => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById('modal-overlay').classList.add('hidden');
    clearFormMessages();
};

// ============================================================================
// FORM MESSAGE HANDLING
// ============================================================================

/**
 * Set form message (success or error)
 * @param {string} id - ID of the message element
 * @param {string} text - Message text
 * @param {boolean} isError - Whether it's an error message
 */
const setFormMessage = (id, text, isError = false) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = text;
    element.style.color = isError ? '#fda4af' : '#bef264';
};

/**
 * Clear all form messages
 */
const clearFormMessages = () => {
    setFormMessage('login-message', '');
    setFormMessage('register-message', '');
};

/**
 * Display banner message with auto-disappear
 * @param {string} message - Message to display
 */
const showBannerMessage = (message) => {
    const banner = document.querySelector('#account-banner p');
    if (banner) {
        banner.textContent = message;
        setTimeout(() => {
            const currentUser = getCurrentUser();
            if (!currentUser) {
                banner.textContent = translations[currentLang]['account-banner'];
            } else {
                const user = getUserProfile(currentUser);
                banner.textContent = translations[currentLang]['account-welcome-user'].replace('{name}', user.name);
            }
        }, 2800);
    } else {
        alert(message);
    }
};

// ============================================================================
// TRANSACTION & HISTORY FUNCTIONS
// ============================================================================

/**
 * Format transaction for display
 * @param {Object} transaction - Transaction object
 * @returns {string} Formatted transaction string
 */
const formatTransaction = (transaction) => {
    const amount = new Intl.NumberFormat('vi-VN').format(transaction.amount);
    const date = new Date(transaction.date).toLocaleString();
    if (transaction.type === 'topup') {
        return `${transaction.label || 'Top up'} +${amount} VNĐ — ${date}`;
    }
    return `${transaction.label || 'Purchase'} -${amount} VNĐ — ${date}`;
};

/**
 * Render transaction history in account dropdown
 * @param {Object} user - User object containing history array
 */
const renderHistory = (user) => {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;
    const history = user.history || [];
    historyList.innerHTML = '';

    if (!history.length) {
        historyList.innerHTML = `<li data-i18n="history-empty">No transactions yet.</li>`;
        setLanguage(currentLang);
        return;
    }

    history.slice(0, 5).forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = formatTransaction(item);
        historyList.appendChild(listItem);
    });
};

// ============================================================================
// AUTHENTICATION UI
// ============================================================================

/**
 * Update UI to reflect authentication state
 */
const updateAuthUI = () => {
    const authArea = document.getElementById('auth-area');
    const accountPanel = document.getElementById('account-panel');
    const accountDropdown = document.getElementById('account-dropdown');
    const currentEmail = getCurrentUser();
    const accountBanner = document.getElementById('account-banner');

    if (currentEmail) {
        // User is logged in
        const user = getUserProfile(currentEmail);
        accountPanel.classList.remove('hidden');
        accountDropdown.classList.add('hidden');
        document.getElementById('account-username').textContent = user.name;
        document.getElementById('account-name').textContent = user.name;
        document.getElementById('account-balance').textContent = formatCurrency(user.balance);
        renderHistory(user);
        authArea.classList.add('hidden');
        accountBanner.querySelector('p').textContent = translations[currentLang]['account-welcome-user'].replace('{name}', user.name);
        
        // Show admin button if user is admin
        const adminBtn = document.getElementById('btn-admin');
        if (adminBtn) {
            adminBtn.style.display = isAdmin(currentEmail) ? 'inline-block' : 'none';
        }
    } else {
        // User is not logged in
        accountPanel.classList.add('hidden');
        authArea.classList.remove('hidden');
        accountBanner.querySelector('p').textContent = translations[currentLang]['account-banner'];
    }

    setLanguage(currentLang);
    bindAuthButtons();
};

/**
 * Bind event listeners to authentication buttons
 */
const bindAuthButtons = () => {
    const loginButton = document.getElementById('btn-login');
    const registerButton = document.getElementById('btn-register');
    const logoutButton = document.getElementById('btn-logout');
    const topupButton = document.getElementById('btn-topup');
    const buyButton = document.getElementById('btn-buygame');
    const accountToggle = document.getElementById('account-toggle');
    const backHomeButton = document.getElementById('back-home');
    const demoButton = document.getElementById('dl-demo');
    const fullButton = document.getElementById('dl-full');

    if (loginButton) loginButton.onclick = () => showModal('login-modal');
    if (registerButton) registerButton.onclick = () => showModal('register-modal');
    if (logoutButton) logoutButton.onclick = logoutUser;
    if (topupButton) topupButton.onclick = showRechargePage;
    if (buyButton) buyButton.onclick = showGameShop;
    
    if (accountToggle) {
        accountToggle.onclick = (event) => {
            event.stopPropagation();
            const dropdown = document.getElementById('account-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        };
    }
    
    if (backHomeButton) backHomeButton.onclick = showHomePage;
    
    const backHomeRechargeButton = document.getElementById('back-home-recharge');
    if (backHomeRechargeButton) backHomeRechargeButton.onclick = showHomePage;
    
    const backPaymentMethodsButton = document.getElementById('back-payment-methods');
    if (backPaymentMethodsButton) backPaymentMethodsButton.onclick = goBackPaymentMethods;
    
    if (demoButton) demoButton.onclick = downloadDemo;
    if (fullButton) {
        fullButton.addEventListener('click', (e) => {
            e.preventDefault();
            downloadFull();
        });
    }

    // Language toggle buttons
    document.getElementById('lang-vn').onclick = () => setLanguage('vi');
    document.getElementById('lang-en').onclick = () => setLanguage('en');
};

// ============================================================================
// LOGIN & REGISTRATION
// ============================================================================

/**
 * Handle user login
 * @param {Event} event - Form submit event
 */
const loginUser = (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    
    console.log('Login attempt:', { email, password });
    
    const user = getUserProfile(email);
    console.log('User found:', user);
    
    if (!user) {
        console.log('User not found for email:', email);
        setFormMessage('login-message', translations[currentLang]['login-error'], true);
        return;
    }
    
    if (user.password !== password) {
        console.log('Password mismatch. Expected:', user.password, 'Got:', password);
        setFormMessage('login-message', translations[currentLang]['login-error'], true);
        return;
    }

    setCurrentUser(email);
    setFormMessage('login-message', translations[currentLang]['login-success']);
    setTimeout(() => {
        hideModal('login-modal');
        updateAuthUI();
    }, 900);
};

/**
 * Handle user registration
 * @param {Event} event - Form submit event
 */
const registerUser = (event) => {
    event.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const users = getUsers();

    if (password !== confirm) {
        setFormMessage('register-message', translations[currentLang]['error-password-match'], true);
        return;
    }

    if (users[email]) {
        setFormMessage('register-message', translations[currentLang]['register-error'], true);
        return;
    }

    // Create new user with 100k VNĐ starting balance
    const isFirstUser = Object.keys(users).length === 0;
    users[email] = {
        name: name || email.split('@')[0],
        email,
        password,
        balance: 100000,
        history: [],
        createdAt: Date.now(),
        isAdmin: isFirstUser
    };

    saveUsers(users);
    setCurrentUser(email);
    setFormMessage('register-message', translations[currentLang]['register-success']);
    setTimeout(() => {
        hideModal('register-modal');
        updateAuthUI();
    }, 900);
};

/**
 * Handle user logout
 */
const logoutUser = () => {
    clearCurrentUser();
    updateAuthUI();
    showBannerMessage(translations[currentLang]['logoff-message']);
};

// ============================================================================
// BALANCE & PAYMENT FUNCTIONS
// ============================================================================

/**
 * Add balance to user account (top-up)
 * @param {number} amount - Amount to top up
 */
const topUpBalance = (amount) => {
    const currentEmail = getCurrentUser();
    if (!currentEmail) return;
    const users = getUsers();
    const user = users[currentEmail];
    
    user.balance = (user.balance || 0) + amount;
    user.history = user.history || [];
    user.history.unshift({
        type: 'topup',
        amount,
        label: translations[currentLang]['btn-topup'],
        date: Date.now()
    });
    
    if (user.history.length > 10) user.history.length = 10;
    users[currentEmail] = user;
    saveUsers(users);
    updateAuthUI();
};

/**
 * Deduct balance from user account (purchase)
 * @param {number} amount - Amount to deduct
 * @param {string} label - Purchase label
 * @returns {boolean} Success status
 */
const deductBalance = (amount, label) => {
    const currentEmail = getCurrentUser();
    if (!currentEmail) return false;
    const users = getUsers();
    const user = users[currentEmail];

    if (user.balance < amount) {
        showBannerMessage(translations[currentLang]['buy-error']);
        return false;
    }

    user.balance = user.balance - amount;
    user.history = user.history || [];
    user.history.unshift({
        type: 'purchase',
        amount,
        label: label,
        date: Date.now()
    });

    if (user.history.length > 10) user.history.length = 10;
    users[currentEmail] = user;
    saveUsers(users);
    updateAuthUI();
    return true;
};

// ============================================================================
// GAME SHOP & DOWNLOAD FUNCTIONS
// ============================================================================

/**
 * Show game shop section
 */
const showGameShop = () => {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('game-shop').classList.remove('hidden');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/**
 * Download demo version
 */
const downloadDemo = () => {
    showBannerMessage(translations[currentLang]['download-success']);
};

/**
 * Purchase and download full version
 */
let isPurchasing = false;
const downloadFull = () => {
    if (isPurchasing) return;
    isPurchasing = true;
    
    const button = document.getElementById('dl-full');
    if (button) button.disabled = true;
    
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showBannerMessage('Please login to purchase games');
        if (button) button.disabled = false;
        isPurchasing = false;
        return;
    }

    if (confirm(translations[currentLang]['confirm-purchase'])) {
        if (deductBalance(50000, 'Neon Quest - Full Version')) {
            showBannerMessage(translations[currentLang]['buy-success']);
            setTimeout(() => {
                showBannerMessage(translations[currentLang]['download-success']);
                if (button) button.disabled = false;
                isPurchasing = false;
            }, 1500);
        } else {
            if (button) button.disabled = false;
            isPurchasing = false;
        }
    } else {
        showBannerMessage(translations[currentLang]['purchase-cancelled']);
        if (button) button.disabled = false;
        isPurchasing = false;
    }
};

// ============================================================================
// PAYMENT & RECHARGE FUNCTIONS
// ============================================================================

/**
 * Show recharge/top-up page
 */
const showRechargePage = () => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showBannerMessage('Please login to top up balance');
        return;
    }
    
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('recharge-page').classList.remove('hidden');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/**
 * Handle payment method selection
 * @param {string} method - Payment method (credit, momo, zalo, bank)
 */
const selectPaymentMethod = (method) => {
    const methodNames = {
        credit: 'Credit Card',
        momo: 'Momo',
        zalo: 'ZaloPay',
        bank: 'Bank Transfer'
    };

    document.getElementById('recharge-page').classList.add('hidden');
    document.getElementById('payment-qr-page').classList.remove('hidden');
    document.getElementById('qr-method-name').textContent = methodNames[method];

    // Generate QR Code (placeholder)
    const qrContainer = document.getElementById('qr-code-container');
    qrContainer.innerHTML = '';
    
    try {
        if (typeof QRCode === 'undefined') {
            throw new Error('QRCode library not loaded');
        }
        // Generate sample QR code (in production, this would be from payment gateway)
        new QRCode(qrContainer, {
            text: `FNQ-Payment-${method}-100000-${Date.now()}`,
            width: 200,
            height: 200,
            correctLevel: QRCode.CorrectLevel.H,
            colorDark: '#7c3aed',
            colorLight: '#f5f4fb'
        });
    } catch (error) {
        console.error('Error generating QR code:', error);
        qrContainer.innerHTML = '<p style="color: red;">Không thể tạo mã QR. Vui lòng thử lại.</p>';
    }
};

/**
 * Go back to payment methods selection
 */
const goBackPaymentMethods = () => {
    document.getElementById('payment-qr-page').classList.add('hidden');
    document.getElementById('recharge-page').classList.remove('hidden');
};

/**
 * Confirm payment and add balance
 */
let isProcessingPayment = false;
const confirmPayment = () => {
    if (isProcessingPayment) return;
    isProcessingPayment = true;
    
    topUpBalance(100000);
    showBannerMessage(translations[currentLang]['payment-success']);
    
    setTimeout(() => {
        document.getElementById('payment-qr-page').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        isProcessingPayment = false;
    }, 2000);
};

// ============================================================================
// PAGE NAVIGATION
// ============================================================================

/**
 * Show home page and hide other sections
 * @param {Event} event - Click event (optional)
 */
const showHomePage = (event) => {
    if (event) event.preventDefault();
    
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('game-shop').classList.add('hidden');
    document.getElementById('recharge-page').classList.add('hidden');
    document.getElementById('payment-qr-page').classList.add('hidden');
    document.getElementById('admin-page').classList.add('hidden');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// ============================================================================
// PASSWORD RESET & FORGOT PASSWORD
// ============================================================================

/**
 * Show forgot password modal
 * @param {Event} event - Click event
 */
const showForgotPassword = (event) => {
    event.preventDefault();
    hideModal('login-modal');
    showModal('forgot-modal');
};

/**
 * Handle password reset request
 * @param {Event} event - Form submit event
 */
const resetPassword = (event) => {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value.trim().toLowerCase();
    const user = getUserProfile(email);

    if (!user) {
        setFormMessage('forgot-message', translations[currentLang]['reset-error'], true);
        return;
    }

    // In production, send email with reset link
    // For now, show a message indicating the password would be sent
    const tempPassword = Math.random().toString(36).slice(-8);
    user.password = tempPassword;
    const users = getUsers();
    users[email] = user;
    saveUsers(users);

    setFormMessage('forgot-message', `${translations[currentLang]['reset-success']} (${tempPassword})`, false);
    
    setTimeout(() => {
        hideAllModals();
        document.getElementById('forgot-email').value = '';
    }, 2000);
};

// ============================================================================
// ADMIN MANAGEMENT
// ============================================================================

/**
 * Show admin page with user management
 */
const showAdminPage = () => {
    const currentUser = getCurrentUser();
    const users = getUsers();
    const user = users[currentUser];

    // Check if user is admin (for now, check if email contains 'admin' or is first user)
    if (!user || !isAdmin(currentUser)) {
        alert('Access denied. Admin only.');
        return;
    }

    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('admin-page').classList.remove('hidden');
    renderUsersList();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/**
 * Check if user is admin
 * @param {string} email - User email
 * @returns {boolean} Whether user is admin
 */
const isAdmin = (email) => {
    const users = getUsers();
    const user = users[email];
    return user && user.isAdmin === true;
};

/**
 * Render users list in admin page
 */
const renderUsersList = () => {
    const users = getUsers();
    const tbody = document.getElementById('users-tbody');
    
    if (!tbody) return;
    tbody.innerHTML = '';

    Object.entries(users).forEach(([email, user]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name || 'N/A'}</td>
            <td>${email}</td>
            <td>${new Intl.NumberFormat('vi-VN').format(user.balance || 0)} VNĐ</td>
            <td>
                <div class="table-actions">
                    <button class="btn-edit" onclick="editUser('${email}')" data-i18n="btn-edit">Edit</button>
                    <button class="btn-delete" onclick="deleteUser('${email}')" data-i18n="btn-delete">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    setLanguage(currentLang);
};

/**
 * Edit user (open edit modal)
 * @param {string} email - User email to edit
 */
const editUser = (email) => {
    alert(`Edit user: ${email}`);
    // TODO: Implement edit user modal
};

/**
 * Delete user
 * @param {string} email - User email to delete
 */
const deleteUser = (email) => {
    if (confirm(`Delete user ${email}?`)) {
        const users = getUsers();
        delete users[email];
        saveUsers(users);
        renderUsersList();
        showBannerMessage('User deleted successfully');
    }
};

/**
 * Go back to home from admin page
 */
const backToHomeFromAdmin = () => {
    document.getElementById('admin-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
};

// ============================================================================
// DEFAULT ADMIN INITIALIZATION
// ============================================================================

/**
 * Initialize default admin account if no users exist
 */
const initializeDefaultAdmin = () => {
    const users = getUsers();
    const defaultAdminEmail = 'admin@fnqstudio.dev';
    
    console.log('Initializing admin account...');
    console.log('Users in storage:', Object.keys(users));
    
    // Ensure default admin account exists
    if (!users[defaultAdminEmail]) {
        console.log('Admin account not found, creating...');
        users[defaultAdminEmail] = {
            name: 'Admin FNQ',
            email: defaultAdminEmail,
            password: 'admin123',
            balance: 1000000,
            history: [],
            createdAt: Date.now(),
            isAdmin: true
        };
        
        saveUsers(users);
        console.log('✓ Default admin account created: admin@fnqstudio.dev / admin123');
    } else {
        console.log('✓ Admin account already exists');
    }
    
    console.log('All users in storage:', Object.keys(getUsers()));
    // Verify admin account
    const adminUser = getUserProfile(defaultAdminEmail);
    console.log('Admin user data:', adminUser);
};

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize application on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize default admin account
    initializeDefaultAdmin();

    // Restore user's language preference
    const savedLang = localStorage.getItem(STORAGE_KEYS.lang) || 'vi';
    setLanguage(savedLang);

    // Update auth UI
    updateAuthUI();

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        const dropdown = document.getElementById('account-dropdown');
        if (dropdown && !dropdown.classList.contains('hidden')) {
            if (!event.target.closest('.account-panel')) {
                dropdown.classList.add('hidden');
            }
        }
    });

    // Close modal when clicking overlay
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', hideAllModals);
    }
});
