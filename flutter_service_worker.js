'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ed4e9137579ad4b3f3de7678e0d88e48",
"index.html": "744e8c37408d959faa224808b56a371d",
"/": "744e8c37408d959faa224808b56a371d",
"main.dart.js": "63df799424ffbcc765d9d8b27fbbf59e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "00aa035eefe82f299669652e21589628",
"assets/AssetManifest.json": "55b297d1ee9afadd978070c57e205c74",
"assets/NOTICES": "2254178245a8e34c562f66d63df2e05e",
"assets/image/BD98F0B0-1F48-4F0A-AFAD-4F9946CA15BF.JPG": "cb3836e9b58fc2909e1b3531978a7b3b",
"assets/image/PHOTO-2021-11-29-22-27-31.jpg": "5c5a1e429adf0c95f982135952bad7c0",
"assets/image/PHOTO-2022-03-26-19-13-13.jpg": "175b4cba59aea6199f5ebb809a478956",
"assets/image/IMG_0188.jpg": "f8477527b39fd46616afa54cdeba9d09",
"assets/image/IMG_0837.jpg": "01ef8da593d00aacd7990155c9727429",
"assets/image/PHOTO-2021-11-30-18-18-27.jpg": "fc24d5c0e4735a9bbda6e7a9b7838aab",
"assets/image/bg.mp3": "dc686579b0ecd37037284e46f9c2321a",
"assets/image/4B52FACB-D432-4105-BC53-A58C2B9C1EB1.JPG": "33e2e49a99ea191411a988b2c6cfe562",
"assets/image/PHOTO-2022-04-01-00-05-40.jpg": "e648f7f01615f46db1408c91630c0779",
"assets/image/Screenshot%25202023-02-17%2520at%25202.01.05%2520PM.png": "6234348525f4d7cc478f5eb156ef0e8c",
"assets/image/IMG_0841.jpg": "dd2d8c6d4b4a3179beb1149e4e3f64ef",
"assets/image/IMG_3795.jpg": "951d36aa081061db3aac2c39d9d80c4a",
"assets/image/ebf0c6d1-a621-4e2f-9f59-e7cb5cf3e3e7.JPG": "0b8e46db7d8dcc170e383f3f82f6d15c",
"assets/image/IMG_0851.jpg": "5511c9279cf8402f7ee1428fb91d70fb",
"assets/image/IMG_0266.jpg": "8b5f548f5dd778c3879787d096e8f958",
"assets/image/PHOTO-2022-03-18-09-32-41.jpg": "1465873a22df2d23d6fd1a9b1f41c012",
"assets/image/PHOTO-2021-12-06-00-05-24.jpg": "ec0fe5b2147d9fa1a5048e58a2dd294a",
"assets/image/friends.jpg": "90ec64324356e510a06586f0cda082c1",
"assets/image/IMG_0137.jpg": "cdc22b113599631072b3c5236a2bcd5e",
"assets/image/IMG_0335.jpg": "e8787d2c8bba3a806930252b5b22b025",
"assets/image/IMG_0080.jpg": "81f009f21242acc0b41ebb25fd2f9351",
"assets/image/PHOTO-2022-03-16-09-41-18.jpg": "4021201d61f82cd12af252901119a665",
"assets/image/IMG_0134.jpg": "dc01d42417aee33a60fe37d49f815e01",
"assets/image/8D970F17-A320-41BC-B543-EA7716AA473D.JPG": "ccff945e4c4850e6b9596f787975054c",
"assets/image/PHOTO-2022-02-13-14-30-18.jpg": "c155debd8d346592d67a145c93e0df19",
"assets/image/D0C2C018-94E8-42F2-BD7B-318B74430CEC.JPG": "d3bbb9b896654bd4cfd96bcc0015d9ed",
"assets/image/PHOTO-2022-02-21-11-35-04.jpg": "f7c2cf3ba31d2bc59fc641061457937b",
"assets/image/IMG_0333.jpg": "f21a952de8f5f956f6b3aa4f2421986f",
"assets/image/6665C9D5-E832-4C9F-A0C0-E24F31815386.JPG": "abbb3e42995f3b0f461b3272566aa96a",
"assets/image/PHOTO-2021-11-29-17-13-03.jpg": "22c148ea2bd3f785a524f666de7e5b8d",
"assets/image/PHOTO-2022-03-07-00-19-59.jpg": "864a94883d0b617ed6d9d7c0de578261",
"assets/image/PHOTO-2021-12-10-00-14-01.jpg": "365f1f55df80176d5ea84c59ab9192c5",
"assets/image/IMG_0795.jpg": "8c91e33a289856044da691cae3cba6c9",
"assets/image/8c1a4063-6f52-4385-a565-82916b4180d1.JPG": "633aa4ce9adfe23cab4d0c90f4e96d57",
"assets/image/IMG_3101.JPG": "066f8db6c54a988edb32f68f5db9cedc",
"assets/FontManifest.json": "d787a9b4e721788270324c37e2fe937e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "20ca6baeeed7714501793e61a766ca43",
"assets/fonts/OleoScript-Bold.ttf": "4a69b0ebcd93357c2823f6af00e1b1c3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
