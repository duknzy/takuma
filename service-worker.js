const CACHE_NAME = 'rb-hybrid-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './F1.jpg',
  './f1.mp4',
  './晋平太.m4a',
  './sum.m4a',
  './focus.m4a',
  './hoodstar.m4a',
  './stay.m4a',
  './R指定.m4a',
  // ★ 外部CDNの依存関係もすべてキャッシュにブち込め！
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://fonts.googleapis.com/css2?family=Bungee&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell & Video');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

/* --- ここから下は変更なしだが、念のため記載 --- */
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('firestore.googleapis.com') || 
      event.request.url.includes('googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          // 古いバージョンのキャッシュ（v4以前）を削除してゴミ掃除
          return caches.delete(key);
        }
      }));
    })
  );
});
