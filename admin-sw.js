// Minimal service worker — just enough to make the admin panel installable.
// It doesn't cache aggressively, so you'll always see fresh data.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Pass everything straight through to the network.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
