const cacheName = "finance-v1";

const files = [
  "/",
  "/index.html",
  "/manifest.json",
  "/chart.min.js",
  "/libs/xlsx.full.min.js",
  "/libs/jspdf.umd.min.js",
  "/libs/jspdf.plugin.autotable.min.js",
  "/libs/FileSaver.min.js",
  "/libs/chart.min.js"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(cacheName).then(c=>{
      return c.addAll(files);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=>{
      return r || fetch(e.request);
    })
  );
});