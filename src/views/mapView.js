import { saveLocation, loadLocation, clearLocation } from '../core/storage.js';

export const mapView = {
  render(container) {
    container.innerHTML = `
      <section class="card">
        <h2>Map & Geolocation</h2>
        <p class="muted">
          Click "Get my location" to allow geolocation. Location is shown (lat/long) and stored locally.
        </p>
        <div>
          <div class="controls">
            <button id="loc-get" class="small">Get my location</button>
            <button id="loc-clear" class="small">Clear</button>
          </div>
          <div id="loc-result" style="margin-top:12px;"></div>
        </div>
      </section>
    `;

    const getBtn = container.querySelector('#loc-get');
    const clearBtn = container.querySelector('#loc-clear');
    const result = container.querySelector('#loc-result');

    const showLocation = coords => {
      result.innerHTML = `
        <div class="card">
          <strong>Latitude:</strong> ${coords.latitude}<br>
          <strong>Longitude:</strong> ${coords.longitude}<br>
          <small>Accuracy: ${coords.accuracy} meters</small>
          <div style="margin-top:8px">
            <a target="_blank" rel="noopener"
               href="https://www.openstreetmap.org/?mlat=${coords.latitude}&mlon=${coords.longitude}">
               Open in OSM</a>
          </div>
        </div>`;
      saveLocation(coords);
    };

    getBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        result.textContent = 'Geolocation not supported.';
        return;
      }
      result.textContent = 'Getting location…';
      navigator.geolocation.getCurrentPosition(
        pos => showLocation(pos.coords),
        err => (result.textContent = `Error: ${err.message}`),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });

    clearBtn.addEventListener('click', () => {
      clearLocation();
      result.innerHTML = '<em>Cleared</em>';
    });

    const saved = loadLocation();
    if (saved) showLocation(saved);
  },
};
