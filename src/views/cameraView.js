import { savePhoto } from '../core/storage.js';
import { showToast } from '../core/utils.js';

export const cameraView = {
  render(container) {
    container.innerHTML = `
      <section class="card">
        <h2>Camera</h2>
        <p class="muted">Take a photo with your device. Photos are stored locally and available offline.</p>
        <div id="camera-area" class="grid-2">
          <div>
            <video id="video" autoplay playsinline></video>
            <div class="controls">
              <button id="btn-snap" class="small">Snap</button>
              <button id="btn-toggle" class="small">Use file input</button>
              <input id="file-input" type="file" accept="image/*" capture="environment" style="display:none">
            </div>
          </div>
          <div>
            <canvas id="canvas" style="display:none"></canvas>
            <img id="photo-preview" alt="preview" />
          </div>
        </div>
      </section>
    `;

    const video = container.querySelector('#video');
    const canvas = container.querySelector('#canvas');
    const preview = container.querySelector('#photo-preview');
    const snapBtn = container.querySelector('#btn-snap');
    const toggleBtn = container.querySelector('#btn-toggle');
    const fileInput = container.querySelector('#file-input');

    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });
        video.srcObject = stream;
      } catch (err) {
        console.warn('Camera not available:', err);
        fileInput.style.display = 'block';
        toggleBtn.style.display = 'none';
        snapBtn.style.display = 'none';
        preview.alt = 'File input fallback';
      }
    }

    startCamera();

    snapBtn.addEventListener('click', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      const data = canvas.toDataURL('image/png');
      preview.src = data;
      savePhoto(data);
      showToast('Photo saved locally (works offline)');
    });

    toggleBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', e => {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        preview.src = reader.result;
        savePhoto(reader.result);
        showToast('Photo saved locally (works offline)');
      };
      reader.readAsDataURL(f);
    });
  },
};
