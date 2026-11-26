// Service worker: cho app chạy được khi không có mạng.
// Mỗi lần cập nhật nội dung, tăng số phiên bản để máy người dùng tải bản mới.
const VERSION = 'hcnn-v1';
const SHELL = ['./', 'index.html', 'app.js', 'data.js', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Trang chính: lấy bản mới trên mạng trước, mất mạng thì dùng bản đã lưu.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => {
      const copy = r.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return r;
    }).catch(() => caches.match('index.html')));
    return;
  }
  // Tệp khác (dữ liệu, icon, phông chữ): dùng bản đã lưu, đồng thời cập nhật ngầm.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
