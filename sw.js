/* ============================================================
   Hisn al-Muslim — Service Worker
   Provides full offline support via Cache-First strategy
   ============================================================ */

const CACHE_VERSION = 'hisnul-muslim-v1.0';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const FONT_CACHE   = `${CACHE_VERSION}-fonts`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Scheherazade+New:wght@400;500;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap'
];

/* ── Install: pre-cache static assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      caches.open(FONT_CACHE).then(cache => cache.addAll(FONT_URLS))
    ])
  );
  self.skipWaiting();
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', event => {
  const keepCaches = [STATIC_CACHE, FONT_CACHE];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => !keepCaches.includes(k))
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: Cache-First for fonts/static, Network-First for rest ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Fonts — cache first, network fallback
  if (url.hostname.includes('fonts.g') || url.hostname.includes('fonts.gstatic')) {
    event.respondWith(
      caches.open(FONT_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // Same-origin static files — cache first
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          }).catch(() => cache.match('/index.html'));
        })
      )
    );
    return;
  }
});

/* ── Handle chapter shortcut URLs from manifest shortcuts ── */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
