const cacheName = 'take-my-pill-cache-v1';
const filesToCache = [
  '.', // current directory
  'index.html',
  'manifest.json',
  'pill-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
