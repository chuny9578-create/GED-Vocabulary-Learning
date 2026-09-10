const CACHE_NAME = 'ged-vocabulary-pwa-v6';
const APP_FILES = [
  './', './index.html', './styles.css', './overrides.css', './app.js',
  './vocabulary-full.js', './manifest.webmanifest', './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  // Only application assets belong in the offline cache, never cloud progress.
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  const file = url.pathname.split('/').pop();
  if (!['', 'index.html', 'styles.css', 'overrides.css', 'app.js', 'vocabulary-full.js', 'manifest.webmanifest', 'icon.svg', 'sync-config.js'].includes(file)) return;
  if (new URL(event.request.url).pathname.endsWith('/sync-config.js')) {
    event.respondWith(fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); return response; }).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); return response; })));
});
