import { initInstallFlow } from '../core/install.js';
import { initNotifications } from '../core/notifications.js';

const NAV_ITEMS = [
  { label: 'Home', icon: 'home', route: 'home' },
  { label: 'Camera', icon: 'photo_camera', route: 'camera' },
  { label: 'Map', icon: 'map', route: 'map' },
  { label: 'Install', icon: 'download', route: '', btnId: 'install-btn' },
  { label: 'Notify', icon: 'notifications', route: '', btnId: 'notify-btn' },
];

export function createNavbar() {
  const header = document.createElement('header');
  header.className = 'app-header';

  header.innerHTML = `
    <!-- LOGO -->
    <a href="#home" class="logo-link" data-route="home">
      <img src="/public/assets/logo.svg" alt="PWA Demo" class="logo">
    </a>

    <!-- DESKTOP NAVIGATION -->
    <nav class="nav-bar desktop-nav" aria-label="Main navigation">
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

    <!-- MOBILE MENU BUTTON -->
    <button class="mobile-menu-btn" aria-label="Open menu">
      <span class="material-icons">menu</span>
    </button>
  `;

  // Create mobile menu panel and overlay separately (outside header)
  const mobileMenuHTML = `
    <!-- MOBILE MENU PANEL -->
    <div class="mobile-menu-panel">
      <div class="mobile-menu-header">
        <h2>Menu</h2>
        <button class="mobile-menu-close" aria-label="Close menu">
          <span class="material-icons">close</span>
        </button>
      </div>
      <nav class="mobile-menu-nav" aria-label="Mobile navigation">
        ${NAV_ITEMS.map(item => `
          <a href="#${item.route}"
             class="mobile-nav-link"
             data-route="${item.route}"
             ${item.btnId ? `id="${item.btnId}-mobile"` : ''}>
            <span class="material-icons">${item.icon}</span>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
    </div>

    <!-- MOBILE MENU OVERLAY -->
    <div class="mobile-menu-overlay"></div>
  `;

  // -----------------------------------------------------------------
  // Mobile Menu Toggle
  // -----------------------------------------------------------------
  requestAnimationFrame(() => {
    // Append mobile menu to body (not header)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = mobileMenuHTML;
    document.body.appendChild(tempDiv.querySelector('.mobile-menu-panel'));
    document.body.appendChild(tempDiv.querySelector('.mobile-menu-overlay'));

    const menuBtn = header.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const panel = document.querySelector('.mobile-menu-panel');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const openMenu = () => {
      panel.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      panel.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    menuBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Initialize PWA helpers
    initInstallFlow();
    initNotifications();
  });

  return header;
}