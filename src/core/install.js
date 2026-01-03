let deferredPrompt = null;

export function initInstallFlow() {
  const installBtn = document.getElementById('install-btn');
  if (!installBtn) return;

  installBtn.style.display = 'none';

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'inline-block';
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.style.display = 'none';
  });
}
