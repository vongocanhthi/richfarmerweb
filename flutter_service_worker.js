'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"styles.css": "17d6c706082ab4e294c9d6a4d0677963",
"privacy-policy.html": "ea4c23beb66eb88b9fc171f510936ca9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"manifest.json": "9c044bce176c861400cc13d814703614",
"index.html": "16b239c242fe1e7ad482d092311c23ce",
"/": "16b239c242fe1e7ad482d092311c23ce",
"script.js": "46fb81dc19136867a1e6ee8478a6e477",
"ads.txt": "e466351a3f5b6b118df08a91fb58b733",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/images/screenshot5.png": "f785f82f406bb786f5ad30e591f31cdd",
"assets/images/screenshot8.png": "5786fab6ffda73bbaa920faf73c3bba6",
"assets/images/screenshot7.png": "9dffc067c72d074891eea24cb8ca413e",
"assets/images/Icon-512.png": "184e31ddefc5977004dec0928fa70553",
"assets/images/Icon-maskable-512.png": "184e31ddefc5977004dec0928fa70553",
"assets/images/Icon-192.png": "8a21ee57baadbbfad2a8f727b2ab03c9",
"assets/images/screenshot3.png": "7df0abc2e1b51e3b116cb6bf177cdcb1",
"assets/images/screenshot4.png": "707fead81aec3998c942788d8edaca01",
"assets/images/favicon.png": "fc6e0ea9f197d7b51325177f71f03cec",
"assets/images/screenshot6.png": "8943e259edf23fe1feeceab7bd0bbbe7",
"assets/images/Icon-maskable-192.png": "8a21ee57baadbbfad2a8f727b2ab03c9",
"assets/images/screenshot2.png": "6fa99057626394663ead7aeb51b6aba6",
"assets/images/logo_rich_farmer.png": "ccee34abbed6f5af3bc2e6be6510a4d3",
"assets/images/screenshot1.png": "2685b1748ba56ad33d0df5c58fc09ec1",
"assets/images/cover_photo.png": "30f582429679cb7d7ddaa1c3e31a1d3f",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "1cbe6f0cd772f8c0eb7ef577f81676d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"images/screenshot5.png": "8aca44140b1070057998d11c9b37c3cc",
"images/screenshot7.png": "801897e6002c4213413c1d8a42cdd553",
"images/Icon-512.png": "184e31ddefc5977004dec0928fa70553",
"images/Icon-maskable-512.png": "184e31ddefc5977004dec0928fa70553",
"images/Icon-192.png": "8a21ee57baadbbfad2a8f727b2ab03c9",
"images/screenshot3.png": "bafdf8fe791187d754aa01047971c0c5",
"images/screenshot4.png": "5d4d8fba104bbc03b930ea3e892a8d18",
"images/favicon.png": "fc6e0ea9f197d7b51325177f71f03cec",
"images/screenshot6.png": "e6ecc61f807c7f96d5e35dad8b9412dc",
"images/Icon-maskable-192.png": "8a21ee57baadbbfad2a8f727b2ab03c9",
"images/screenshot2.png": "dd344177ecbbb49798e4f3d795036fa8",
"images/logo_rich_farmer.png": "ccee34abbed6f5af3bc2e6be6510a4d3",
"images/screenshot1.png": "781b8213c2670eaa044b025f9bfe1ae2",
"images/cover_photo.png": "30f582429679cb7d7ddaa1c3e31a1d3f",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"CNAME": "2d67701c23f3b9ce51f2eb0869590371",
"flutter_bootstrap.js": "ff620afaffce3f6eae52a91cabbc39d9",
"version.json": "75e42b99c97fedcd7469a05a3d3371fc",
"main.dart.js": "0a9e4e30a3be6dc6ee8709a2e04a3438",
"app-ads.txt": "e466351a3f5b6b118df08a91fb58b733"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
