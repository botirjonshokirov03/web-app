export function initRouter(root, views) {
  function render() {
    const hash = location.hash.replace('#', '') || 'home';

    document.querySelectorAll('.nav-link').forEach(link =>
      link.classList.remove('active')
    );
    document
      .querySelector(`[data-route="${hash}"]`)
      ?.classList.add('active');

    const view = views[hash] || views.home;
    root.innerHTML = '';
    view.render(root);
  }

  // attach nav links
  document.querySelectorAll('.nav-link[data-route]').forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();
      const route = e.currentTarget.dataset.route;
      location.hash = route;
    })
  );

  window.addEventListener('hashchange', render);
  render();
}
