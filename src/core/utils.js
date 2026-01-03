export function showToast(txt) {
  const t = document.createElement('div');
  Object.assign(t.style, {
    position: 'fixed',
    right: '12px',
    bottom: '12px',
    background: '#111',
    color: 'white',
    padding: '10px 12px',
    borderRadius: '10px',
    zIndex: 9999,
  });
  t.textContent = txt;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
