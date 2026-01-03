export function initNotifications() {
  const notifyBtn = document.getElementById('notify-btn');
  if (!notifyBtn) return;

  notifyBtn.addEventListener('click', async () => {
    if (!('Notification' in window)) {
      alert('Notifications not supported in this browser.');
      return;
    }

    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      alert('Notification permission denied.');
      return;
    }

    const notifData = {
      title: 'Hello from PWA Demo',
      options: {
        body: 'You enabled notifications. Try offline features too!',
        icon: '/manifest.json',
        tag: 'demo-notif',
      },
    };

    if (navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SHOW_NOTIFICATION',
        payload: notifData,
      });
    } else {
      new Notification(notifData.title, notifData.options);
    }

    notifyBtn.textContent = 'Notifications On';
    notifyBtn.disabled = true;
  });
}
