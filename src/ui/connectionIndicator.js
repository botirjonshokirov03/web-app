export function initConnectionStatus() {
  const connStatus = document.getElementById('connection-status');
  if (!connStatus) return;

  function updateConnection() {
    const online = navigator.onLine;
    connStatus.textContent = online ? 'Online' : 'Offline';
    connStatus.className = online ? 'status online' : 'status offline';
  }

  window.addEventListener('online', updateConnection);
  window.addEventListener('offline', updateConnection);
  updateConnection();
}
