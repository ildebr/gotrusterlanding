let CACHE_NAME = 'trusterApp';
const urlsToCache = [    
    '/index.html',
];
self.addEventListener('install', function (event) {
    // Realizar los pasos de instalación 
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Open cache');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});