self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cometa-cache-v1').then((cache) => {
      return cache.addAll([
        '/cometa/',
        '/cometa/index.html',
        '/cometa/manifest.json',
        '/cometa/icons/icon-192.png',
        '/cometa/icons/icon-512.png',
        '/cometa/images/imagen1.jpg',
        '/cometa/images/imagen2.jpg',
        '/cometa/images/imagen3.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
