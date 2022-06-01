'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"main.dart.js": "79c62b97d62bf0e6cbd04c27fe8eae05",
"version.json": "addc7fb51b9aa6c89b33c0738cabc59d",
"assets/assets/icon.svg": "3f2eedcafcc5b815fa2eaa0f8750e2d5",
"assets/assets/gym.jpg": "4e9e9afb7437901a7bbc3fc572889f15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "eee9706859ea803aa9d3a39e795e2045",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "4d68fd4eeb2333eec30118b6bbcf0647",
"icons/Icon-192.png": "5c9dd1bf70d06df56e37c9830dcaa10f",
"icons/Icon-512.png": "8294c00938981abbbb69a4fbc893e55c",
"manifest.json": "09556fa0841fca7b27bcd3a16a66b5dc",
"index.html": "ed5ba950b5cc04963928c964acaa6f7c",
"/": "ed5ba950b5cc04963928c964acaa6f7c",
"favicon.png": "02da0102c8f92137049556dd9fa81b5b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "11d165048aed7636282420e06b89b10d",
".git/refs/remotes/origin/master": "11d165048aed7636282420e06b89b10d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/b7/5a4aad8d16076609aad8c4bf072a2e9e921259": "e3c2fa0fe2f17875db715ee028c04038",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/ca4f4aaf4427b468a27084f204052796f30be1": "61ef43a140409e42c91921b143f2232b",
".git/objects/5b/21a5cc5dfcc85a828b7a3ea1e8c95d4bbd190c": "7422a987f88d21ce083b93e1183b4aca",
".git/objects/b2/4ffe32da7a7348d690124f6df4d59ac4068ac8": "01cdbf15fd7cb9f3f63d52711015c223",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/1471873461d16449281aa3c318716aec7fae22": "e5065976ab9b70367d3cb8f6b4642227",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f1de380a0e017bec1769375f3c5a1a91e628fd": "7006f1612e2fb240113c643fe9340400",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/e8731e3bc109d58da5f0e83a26d7e05aa39d61": "6eb293740af7c89bda7a435625e37ef1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/07/881947bf309460f1114e32af73bdf25b984662": "e72f1553f66dd30d4a11e1ffacbec0f2",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b3/619baadd78fc0b2d0d60ff140a961dae55e3f4": "c91ec55cfbb3bbb9f5857afa1d774a51",
".git/objects/08/498e6dedae0e94f79e360588f468feb94a83d8": "f22444e4d5fbf1a42e67c8363abc76fe",
".git/objects/15/8e625c0a09fa61ead9d071cc460bcb01581aab": "e1ed973a9b8dde6592932bc694fa8ab0",
".git/objects/e9/45171c46775d1db3a8ef38e312fc88764230de": "153729e5da13a0ad288edc3ea3a263f2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/71/0aae4f56970fc23a54a7ee084eec8a465385eb": "9c21300e6405dce0df557908232d608d",
".git/objects/09/53fcaf7115c820bcf646fc0a72ba2df51b0f47": "3061753e90910be0dcc2e810b90b4c5b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/44/a064b0979b8174b5c552d721be4a9664b54061": "3c7dcfa02032118a1bd6cab7d8f0fc3f",
".git/objects/6d/b861ea1c9ccd3aef3e5bf139509caf219e8a18": "d7238d9d1a26bcacaff0e7b67d10bd38",
".git/objects/58/5516126cf9dbc5bc22ae0a2d14e02b18bb440a": "fc95726dc29be9dba1c9d2478333a6d3",
".git/objects/52/82798ed1f947ec9eed792f401c0bf8bc4de97b": "d3e8baa0aa5907fad97f6f6eec7b970b",
".git/objects/3e/f5818bc60273f2d4c5fee534f18e2eb055f6bd": "0067c2172dd8c371511512e00575a925",
".git/objects/ca/544168e1d1d622cb1367425db3dea3563f61e3": "d65041e9691377650bd5b7d54074793d",
".git/objects/41/2b287742e48cb8a3a659ad22eb8116edd92d4d": "ce65721944a4af67de6f3bd7a6ce4bc6",
".git/objects/31/79841ba0dd2e5c5df4a8bf8c224a33234d458b": "ce5ec3de60812d6a56f8be04bac03cb5",
".git/objects/d0/2e58f22464907e047660598b3510d833858814": "6bbf4ee02b4b417a7d08f672e8deee4d",
".git/objects/03/669ed181aea6d15ff3288b8827fbc2cf2810df": "63009c27e12eef0ecf380f0e33e3482b",
".git/objects/83/55e6f663fe15a2d063c9181fd17a5439d1f4d3": "617fb646dd8b19d3034c6bdc052e38ee",
".git/objects/00/2c8f3218c886e6353ee72f462bebf2bccf4da2": "65ee106f62be231bca5f16f23345ef4b",
".git/objects/84/7b1e516cd5fe88056b659d98400c86c3dab518": "954d36d44147714409d0e1cd16569ff1",
".git/objects/29/ec9b4ee43281c95e6ebeafabcfdc9c3efbeb2f": "93d6296be0094d96dbdf5aa0359f3689",
".git/objects/b9/454965cde750a28fe9b20ee528fa105cd3c1bb": "e9cfd9d18e71ec6fea206af41e1999da",
".git/objects/ec/c3da8eb558d2fbc94393fc0f169e97f3e82d78": "16a51059142ff83086c218176ef740ca",
".git/objects/3b/6b2368a132b0578c8819add9e1228406e85967": "9b2c414a6bb68b15132b503acf1a366e",
".git/COMMIT_EDITMSG": "de34f55d39f9f584b67845472876b6fa",
".git/logs/HEAD": "31f032c3d9386914a90ad3be4c1e2a12",
".git/logs/refs/heads/master": "31f032c3d9386914a90ad3be4c1e2a12",
".git/logs/refs/remotes/origin/master": "82b0f27e966426e7e5c062a8571eb133",
".git/config": "30df49e8c182389ccc67232d43771d76",
".git/index": "aedd249e9403ca8f5ad58100c5418f59"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
