import { initInstallFlow } from '../core/install.js';
import { initNotifications } from '../core/notifications.js';

const NAV_ITEMS = [
  { label: 'Home',    icon: 'home',          route: 'home' },
  { label: 'Camera',  icon: 'photo_camera',  route: 'camera' },
  { label: 'Map',     icon: 'map',           route: 'map' },
  { label: 'About',   icon: 'info',          route: 'about' },
  { label: 'Install', icon: 'download',      route: '', btnId: 'install-btn' },
  { label: 'Notify',  icon: 'notifications', route: '', btnId: 'notify-btn' },
];

export function createNavbar() {
  const header = document.createElement('header');
  header.className = 'app-header';

  header.innerHTML = `
    <!-- LOGO -->
    <a href="#home" class="logo-link" data-route="home">
      <img src="/public/assets/logo.svg" alt="PWA Demo" class="logo">
    </a>

    <!-- NAVIGATION -->
    <nav class="nav-bar" aria-label="Main navigation">
      ${NAV_ITEMS.map(item => `
        <a href="#${item.route}"
           class="nav-link"
           data-route="${item.route}"
           ${item.btnId ? `id="${item.btnId}"` : ''}>
          <span class="material-icons">${item.icon}</span>
          <span class="nav-text">${item.label}</span>
        </a>
      `).join('')}
    </nav>
  `;

  // -----------------------------------------------------------------
  // PWA helpers – run after the DOM is in the document
  // -----------------------------------------------------------------
  requestAnimationFrame(() => {
    initInstallFlow();
    initNotifications();
  });

  return header;
}