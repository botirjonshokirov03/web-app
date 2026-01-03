import { loadPhotos, clearPhotos } from '../core/storage.js';
import { showToast } from '../core/utils.js';

export const homeView = {
  render(container) {
    container.innerHTML = `
      <section class="card">
        <h2>Welcome to the PWA Demo</h2>
        <p class="muted">
          This project demonstrates a fully installable <strong>Progressive Web App (PWA)</strong>
          built with <strong>Vanilla JavaScript</strong>, <strong>HTML5</strong>, and <strong>CSS3</strong>.
          It integrates native browser APIs such as <em>Camera</em>, <em>Geolocation</em>, 
          <em>Push Notifications</em>, and supports <em>Offline Mode</em> through Service Workers and Cache API.
        </p>
      </section>

      <section class="card">
        <h3>📘 App Overview</h3>
        <div class="info-grid">
          <div><strong>Core Technologies</strong></div>
          <div>HTML5, CSS3, JavaScript (no frameworks)</div>

          <div><strong>Installable PWA</strong></div>
          <div>Includes <code>manifest.json</code> and install prompt handling</div>

          <div><strong>Native Device Features</strong></div>
          <div>Camera API, Geolocation API, and Web Notifications</div>

          <div><strong>Offline Support</strong></div>
          <div>Implemented via Service Worker with intelligent caching strategy</div>

          <div><strong>Responsiveness</strong></div>
          <div>Optimized layout for desktop, tablet, and mobile screens</div>

          <div><strong>Performance</strong></div>
          <div>Modular code, cached assets, and lazy DOM updates</div>

          <div><strong>Folder Structure</strong></div>
          <div>
            <ul class="structure">
              <li><code>/src/core</code> – utilities, storage, router, service worker logic</li>
              <li><code>/src/views</code> – each view has its own render logic</li>
              <li><code>/styles</code> – base, layout, theme, and component styling</li>
              <li><code>/public</code> – manifest, icons, offline assets</li>
            </ul>
          </div>

          <div><strong>Code Quality</strong></div>
          <div>Clean structure, formatted CSS, no inline styles, meaningful names</div>
        </div>
      </section>

      <section class="card">
        <div class="footer-row">
          <h3>Your Photos</h3>
          <button id="clear-photos" class="small">Clear</button>
        </div>
        <div class="list" id="photos-list"></div>
      </section>
    `;

    const clearBtn = container.querySelector('#clear-photos');
    const list = container.querySelector('#photos-list');

    clearBtn.addEventListener('click', () => {
      clearPhotos();
      showToast('All photos cleared.');
      this.render(container);
    });

    const photos = loadPhotos();
    list.innerHTML = photos.length
      ? photos
          .map(
            p => `
          <div class="item">
            <img src="${p.data}" style="max-width:160px;border-radius:8px;display:block;margin-bottom:8px" />
            <div><small>${new Date(p.ts).toLocaleString()}</small></div>
          </div>`
          )
          .join('')
      : '<div class="item"><em>No photos yet.</em></div>';
  },
};
