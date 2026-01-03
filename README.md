# PWA Demo — Camera & Geolocation

A modern, vibrant Progressive Web App showcasing native device features with a premium user interface.

![PWA Demo](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![Responsive](https://img.shields.io/badge/Design-Responsive-00D9FF?style=for-the-badge)

---

## 🌟 Overview

This Progressive Web App demonstrates modern web capabilities including:

- ✨ **Installable PWA** with manifest and install prompts
- 📸 **Camera Access** using getUserMedia API with file input fallback
- 📍 **Geolocation** tracking with real-time coordinates
- 🔔 **Push Notifications** via Service Worker
- 💾 **Offline Support** with intelligent caching strategies
- 🎨 **Modern UI** with vibrant gradients and glassmorphism effects
- 📱 **Fully Responsive** with mobile-first bottom navigation

---

## 🚀 Quick Start

### Prerequisites
- Node.js installed (for http-server)
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation & Running

1. **Clone or download** this repository

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx http-server . -c-1 -p 8080 --cors
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

> **Note**: Camera and geolocation features require either HTTPS or localhost. The development server uses localhost which browsers treat as secure.

### For HTTPS (Production)
- Deploy to **GitHub Pages** (automatic HTTPS)
- Use `http-server` with SSL certificates
- Use `mkcert` for local SSL certificates

---

## 📱 Features

### 1. Camera Capture
- **Live Camera Stream**: Access device camera using `getUserMedia` API
- **Photo Capture**: Snap photos and preview them instantly
- **File Input Fallback**: Works on devices without camera API support
- **Offline Storage**: Photos saved to `localStorage` for offline access

**How it works**:
```javascript
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
```

### 2. Geolocation
- **Real-time Location**: Get current latitude, longitude, and accuracy
- **Persistent Storage**: Location data saved to `localStorage`
- **Offline Access**: View last known location even when offline

**How it works**:
```javascript
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude, accuracy } = position.coords;
})
```

### 3. Push Notifications
- **Permission Handling**: Request notification permissions gracefully
- **Service Worker Integration**: Notifications work even when app is closed
- **Cross-tab Support**: Notifications visible across all browser tabs

**How it works**:
```javascript
Notification.requestPermission()
self.registration.showNotification(title, options)
```

### 4. Progressive Web App
- **Installable**: Add to home screen on mobile and desktop
- **Offline First**: Works without internet connection
- **App-like Experience**: Full-screen mode, splash screen, app icon

---

## 🎨 Design System

### Color Palette
The app uses a vibrant, modern color scheme:

- **Primary**: Electric Blue/Purple gradient (`#667eea` → `#764ba2`)
- **Secondary**: Bright Cyan (`#4facfe` → `#00f2fe`)
- **Accent**: Hot Pink/Magenta (`#f093fb` → `#f5576c`)
- **Success**: Emerald Green gradient
- **Background**: Subtle gradient (`#f5f7fa` → `#c3cfe2`)

### Visual Effects
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Buttons**: Smooth color transitions with glow effects
- **Micro-animations**: Hover effects, transitions, and loading states
- **Shadows & Depth**: Multi-layer shadows for visual hierarchy

### Responsive Design
- **Desktop**: Full navigation with text labels
- **Tablet**: Optimized spacing and grid layouts
- **Mobile**: Bottom navigation bar for thumb-friendly access

---

## 📁 Project Structure

```
web-app/
├── index.html              # Main HTML shell
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
├── styles/
│   ├── variables.css       # Design system variables
│   ├── theme.css           # Global theme and typography
│   ├── base.css            # Reset and base styles
│   ├── layout.css          # Layout and grid system
│   └── components.css      # Component styles
├── src/
│   ├── app.js              # Main application entry
│   ├── components/
│   │   ├── navbar.js       # Navigation bar component
│   │   └── footer.js       # Footer component
│   ├── core/
│   │   ├── router.js       # SPA routing
│   │   ├── install.js      # PWA install flow
│   │   └── notifications.js # Notification handling
│   └── views/
│       ├── homeView.js     # Home page
│       ├── cameraView.js   # Camera page
│       └── mapView.js      # Map/Geolocation page
└── public/
    └── assets/             # Images and icons
```

---

## 🔧 Service Worker & Caching

### Caching Strategies

1. **Precache** (Install):
   - App shell: `index.html`, CSS, JavaScript
   - Ensures instant loading on repeat visits

2. **Network First** (Runtime):
   - Navigation requests
   - API calls (`/api/*`)
   - Falls back to cache when offline

3. **Cache First** (Runtime):
   - Static resources (images, fonts)
   - Faster loading for assets

4. **Offline Fallback**:
   - Cached app shell loads when network fails
   - Inline SVG fallback for missing images

### Cache Management
```javascript
// Service Worker caches
const CACHE_NAME = 'pwa-demo-v1';
const PRECACHE_URLS = ['/index.html', '/styles/...', '/src/...'];
```

---

## 💡 Usage Guide

### Installing the App
1. Click the **Install** button in the navigation
2. Confirm the installation prompt
3. App will be added to your home screen/app drawer

### Using the Camera
1. Navigate to **Camera** page
2. Click **Snap** to start camera stream
3. Click **Capture** to take a photo
4. Photo appears in preview area
5. Use **File Input** as fallback on unsupported devices

### Getting Location
1. Navigate to **Map** page
2. Click **Get my location**
3. Grant location permission when prompted
4. View your coordinates and accuracy
5. Data persists in `localStorage`

### Enabling Notifications
1. Click **Notify** button in navigation
2. Grant notification permission
3. Receive test notification
4. Notifications work even when app is closed

---

## 🌐 Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| PWA Install | ✅ | ✅ | ✅ | ✅ |
| Service Worker | ✅ | ✅ | ✅ | ✅ |
| Camera API | ✅ | ✅ | ✅ | ✅ |
| Geolocation | ✅ | ✅ | ✅ | ✅ |
| Notifications | ✅ | ✅ | ⚠️ | ✅ |

⚠️ = Limited support or requires specific configuration

---

## 🔐 Privacy & Permissions

This app requests the following permissions:

- **Camera**: To capture photos (only when you use the Camera feature)
- **Location**: To get your coordinates (only when you use the Map feature)
- **Notifications**: To send notifications (only when you enable them)

**Data Storage**:
- All data is stored locally in your browser (`localStorage`)
- No data is sent to external servers
- You can clear data anytime via browser settings

---

## 🚧 Known Limitations

1. **localStorage Quotas**: Storing many large images may hit browser limits
   - **Solution**: For production, migrate to IndexedDB

2. **Push Notifications**: Requires server infrastructure for true push
   - **Current**: Client-side notifications via Service Worker
   - **Future**: Implement Push API with backend subscription

3. **Safari iOS**: Some PWA features have limited support
   - Install prompt may not appear
   - Background notifications limited

---

## 🛠️ Development

### CSS Architecture
The project uses a modular CSS architecture:

1. **variables.css**: Design tokens (colors, spacing, typography)
2. **theme.css**: Global theme and font loading
3. **base.css**: Reset and base element styles
4. **layout.css**: Grid system and page layouts
5. **components.css**: Component-specific styles

### Adding New Features
1. Create view in `src/views/`
2. Add route in `src/core/router.js`
3. Add navigation item in `src/components/navbar.js`
4. Update Service Worker cache if needed

### Customizing Design
All design tokens are in `styles/variables.css`:
```css
--color-primary-600: #5568d3;  /* Change primary color */
--gradient-primary: linear-gradient(...);  /* Custom gradient */
--spacing-4: 1rem;  /* Adjust spacing */
```

---

## 📦 Production Deployment

### Build Checklist
- [ ] Update `manifest.json` with proper icons (192x192, 512x512)
- [ ] Configure proper `theme-color` and `background_color`
- [ ] Update Service Worker cache version
- [ ] Test offline functionality
- [ ] Validate PWA with Lighthouse
- [ ] Test on multiple devices and browsers

### Deployment Options
1. **GitHub Pages**: Push to `gh-pages` branch
2. **Netlify**: Drag and drop or connect Git repo
3. **Vercel**: Import project and deploy
4. **Firebase Hosting**: `firebase deploy`

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Credits

Built with vanilla JavaScript, modern CSS, and Web APIs.

**Technologies Used**:
- Progressive Web App APIs
- Service Worker API
- MediaDevices API (Camera)
- Geolocation API
- Notification API
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)

---

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Ensure you're using a modern browser
3. Verify localhost or HTTPS is being used
4. Clear browser cache and try again

---

**Enjoy building with modern web technologies! 🚀**
