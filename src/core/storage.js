const PHOTOS_KEY = 'pwa_photos';
const LOC_KEY = 'pwa_last_location';

export function savePhoto(dataUrl) {
  const photos = loadPhotos();
  photos.unshift({ data: dataUrl, ts: Date.now() });
  localStorage.setItem(PHOTOS_KEY, JSON.stringify(photos));
}

export function loadPhotos() {
  return JSON.parse(localStorage.getItem(PHOTOS_KEY) || '[]');
}

export function clearPhotos() {
  localStorage.removeItem(PHOTOS_KEY);
}

export function saveLocation(coords) {
  localStorage.setItem(LOC_KEY, JSON.stringify(coords));
}

export function loadLocation() {
  const saved = localStorage.getItem(LOC_KEY);
  return saved ? JSON.parse(saved) : null;
}

export function clearLocation() {
  localStorage.removeItem(LOC_KEY);
}
