export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'app-footer';

  footer.innerHTML = `
    <div class="footer-left">
      <small>© ${new Date().getFullYear()} PWA Demo •
        <a href="#about" data-route="about">About</a> •
        <a href="#privacy">Privacy</a>
      </small>
    </div>

    <div class="footer-right">
      <div id="connection-status" class="status online">Online</div>
    </div>
  `;

  const status = footer.querySelector('#connection-status');

  const updateStatus = () => {
    const online = navigator.onLine;
    status.textContent = online ? 'Online' : 'Offline';
    status.className = `status ${online ? 'online' : 'offline'}`;
  };

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
  updateStatus();

  return footer;
}