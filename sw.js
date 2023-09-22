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
      'resources/fonts/NotoEmoji-Regular.woff',
      'resources/fonts/NotoEmoji-RegularLICENSE',
      'resources/img/icons/book.svg',
      'resources/img/icons/books.svg',
      'resources/img/icons/cog.svg',
      'resources/img/icons/home.svg',
      'resources/img/icons/left-arrow.svg',
      'resources/img/icons/right-arrow.svg',
      'resources/img/icons/up-arrow.svg',
      'resources/img/symbol-kwit.png',
      'resources/html/dict/cjg.html',
      'resources/html/dict/en.html',
      'resources/html/dict/es.html',
      'resources/html/dict/fr.html',
      'resources/html/dict/pt.html',
      'resources/html/dict/ru.html',
      'resources/audio/a.ogg',
      'resources/audio/ablaut.ogg',
      'resources/audio/ae.ogg',
      'resources/audio/ah.ogg',
      'resources/audio/ai.ogg',
      'resources/audio/al.ogg',
      'resources/audio/am.ogg',
      'resources/audio/an.ogg',
      'resources/audio/ao.ogg',
      'resources/audio/ar_old.ogg',
      'resources/audio/ar.ogg',
      'resources/audio/ar3.ogg',
      'resources/audio/ba.ogg',
      'resources/audio/ca.ogg',
      'resources/audio/cadeau.ogg',
      'resources/audio/cca.ogg',
      'resources/audio/da.ogg',
      'resources/audio/dja.ogg',
      'resources/audio/e.ogg',
      'resources/audio/ee.ogg',
      'resources/audio/eh_original.ogg',
      'resources/audio/eh.ogg',
      'resources/audio/fa.ogg',
      'resources/audio/ga.ogg',
      'resources/audio/ha.ogg',
      'resources/audio/i.ogg',
      'resources/audio/ih_original.ogg',
      'resources/audio/ih.ogg',
      'resources/audio/ja.ogg',
      'resources/audio/ka.ogg',
      'resources/audio/la.ogg',
      'resources/audio/ma.ogg',
      'resources/audio/na.ogg',
      'resources/audio/o.ogg',
      'resources/audio/oa.ogg',
      'resources/audio/oe.ogg',
      'resources/audio/oh_original.ogg',
      'resources/audio/oh.ogg',
      'resources/audio/pa.ogg',
      'resources/audio/photo.ogg',
      'resources/audio/ra1.ogg',
      'resources/audio/ra2.ogg',
      'resources/audio/rabr.ogg',
      'resources/audio/rla.ogg',
      'resources/audio/rra.ogg',
      'resources/audio/sa.ogg',
      'resources/audio/shinan.ogg',
      'resources/audio/ta.ogg',
      'resources/audio/tca.ogg',
      'resources/audio/tha.ogg',
      'resources/audio/tsa.ogg',
      'resources/audio/u.ogg',
      'resources/audio/uh.ogg',
      'resources/audio/ui.ogg',
      'resources/audio/va.ogg',
      'resources/audio/wa.ogg',
      'resources/audio/xa.ogg',
      'resources/audio/ya.ogg',
      'resources/audio/za.ogg'
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