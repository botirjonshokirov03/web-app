import { createNavbar } from './components/navbar.js';
import { createFooter } from './components/footer.js';
import { initRouter } from './core/router.js';
import { homeView } from './views/homeView.js';
import { cameraView } from './views/cameraView.js';
import { mapView } from './views/mapView.js';
import { renderAbout } from './views/about.js';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app-root');
  const views = { home: homeView, camera: cameraView, map: mapView, about: renderAbout };

  const header = createNavbar();
  const footer = createFooter();

  document.body.prepend(header);
  document.body.append(footer);

  initRouter(appRoot, views);
});
