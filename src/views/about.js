export function renderAbout(ROOT) {
  ROOT.innerHTML = `
    <section class="card about-section">
      <h2>About This App</h2>
      <p>This PWA demo was created by <strong>Student Name</strong> as part of a modern web development project.</p>
      <ul class="feature-list">
        <li>📸 Camera integration (works offline)</li>
        <li>📍 Geolocation with map preview</li>
        <li>🔔 Push notifications via Service Worker</li>
        <li>📱 Fully responsive and installable</li>
      </ul>
    </section>

    <section class="card about-section">
      <h3>About the Student</h3>
      <p><strong>Name:</strong> Your Name Here</p>
      <p><strong>Student ID:</strong> 123456</p>
      <p><strong>Institution:</strong> Your University</p>
      <p><strong>Course:</strong> Web & Mobile Application Development</p>
      <p class="muted small">This project demonstrates progressive web app features, UI modularity, and best coding practices.</p>
    </section>
  `;
}
