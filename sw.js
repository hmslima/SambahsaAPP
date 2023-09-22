const CACHE_NAME = `SambahsaAPP v0.2`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      'index.html',
      'main.js',
      'resources/css/styles.css',
      'resources/js/js_dictionar.js',
      'resources/js/sambahsa_pronunciator.js',
      'resources/img/icons/book.svg',
      'resources/img/icons/books.svg',
      'resources/img/icons/cog.svg',
      'resources/img/icons/home.svg',
      'resources/img/icons/brackets.svg',
      'resources/img/symbol-kwit.png',
      'resources/html/dict/cjg.html',
      'resources/html/dict/en.html',
      'resources/html/dict/es.html',
      'resources/html/dict/fr.html',
      'resources/html/dict/pt.html',
      'resources/html/dict/ru.html',
    ]);
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  console.log("app worker is activated");
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});