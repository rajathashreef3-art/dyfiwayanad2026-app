self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Serve network request directly. Satisfies Chrome PWA requirement.
  e.respondWith(
    fetch(e.request).catch(() => {
      // Offline fallback if needed
    })
  );
});
