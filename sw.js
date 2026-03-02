const CACHE_NAME = 'memory-game-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 安装并缓存资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 离线支持：拦截请求并返回缓存
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});