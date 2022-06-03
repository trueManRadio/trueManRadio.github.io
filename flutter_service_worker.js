'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "2ad30874f49d81539409bcfa49be515a",
"version.json": "addc7fb51b9aa6c89b33c0738cabc59d",
"assets/assets/icon.svg": "3f2eedcafcc5b815fa2eaa0f8750e2d5",
"assets/assets/gym.jpg": "4e9e9afb7437901a7bbc3fc572889f15",
"assets/assets/bg_GayWave.sadGay.mp4": "2b44a424413db1858ddd73cc94b3c994",
"assets/assets/bg_GayWave.gay.mp4": "8680d6b0e3b770b531b93298e2ca82c3",
"assets/assets/bg_GayWave.trueGay.mp4": "fc4f2ff5c028a97c7875fc94f0f1f7b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "04b4556a912a4be34d80172d3a2af533",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fee4fcdc654b33a5039f16d0f03b028b",
"assets/shaders/ink_sparkle.frag": "cd9497aabff52e5f1b1f93de602c461e",
"icons/Icon-192.png": "5c9dd1bf70d06df56e37c9830dcaa10f",
"icons/Icon-512.png": "8294c00938981abbbb69a4fbc893e55c",
"icons/Loading-Icon.png": "ba96c68c37eba25a21dc911b3aadf4f8",
"manifest.json": "09556fa0841fca7b27bcd3a16a66b5dc",
"index.html": "c5c92b8197d60d58f95f3475b26c1651",
"/": "c5c92b8197d60d58f95f3475b26c1651",
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
".git/refs/heads/master": "ae8721622345a7a528e22f623778dc2c",
".git/refs/remotes/origin/master": "ae8721622345a7a528e22f623778dc2c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/b7/5a4aad8d16076609aad8c4bf072a2e9e921259": "e3c2fa0fe2f17875db715ee028c04038",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/ca4f4aaf4427b468a27084f204052796f30be1": "61ef43a140409e42c91921b143f2232b",
".git/objects/5b/21a5cc5dfcc85a828b7a3ea1e8c95d4bbd190c": "7422a987f88d21ce083b93e1183b4aca",
".git/objects/5b/206a1d951c0d52eb97d1bb044bacbb891d1928": "19aad798dd1575fe4f0730c77066a46e",
".git/objects/b2/4ffe32da7a7348d690124f6df4d59ac4068ac8": "01cdbf15fd7cb9f3f63d52711015c223",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/1471873461d16449281aa3c318716aec7fae22": "e5065976ab9b70367d3cb8f6b4642227",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f1de380a0e017bec1769375f3c5a1a91e628fd": "7006f1612e2fb240113c643fe9340400",
".git/objects/79/4367e69fbe00d3196882e4bfb3c08df74f3acf": "8035f6af1273b3e5a3b69a2181def69b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/e8731e3bc109d58da5f0e83a26d7e05aa39d61": "6eb293740af7c89bda7a435625e37ef1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/07/881947bf309460f1114e32af73bdf25b984662": "e72f1553f66dd30d4a11e1ffacbec0f2",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b3/619baadd78fc0b2d0d60ff140a961dae55e3f4": "c91ec55cfbb3bbb9f5857afa1d774a51",
".git/objects/08/498e6dedae0e94f79e360588f468feb94a83d8": "f22444e4d5fbf1a42e67c8363abc76fe",
".git/objects/08/6ba32ba361b85dfc9594c4f9530b0e50ddfc0c": "6ad6277de554f4d512170b40e2f97d04",
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
".git/objects/52/517bc259bd3aaca4dd764aff7c5f14f6ada783": "938f871e835729e55719656f9fb79f5a",
".git/objects/3e/f5818bc60273f2d4c5fee534f18e2eb055f6bd": "0067c2172dd8c371511512e00575a925",
".git/objects/ca/544168e1d1d622cb1367425db3dea3563f61e3": "d65041e9691377650bd5b7d54074793d",
".git/objects/41/2b287742e48cb8a3a659ad22eb8116edd92d4d": "ce65721944a4af67de6f3bd7a6ce4bc6",
".git/objects/31/79841ba0dd2e5c5df4a8bf8c224a33234d458b": "ce5ec3de60812d6a56f8be04bac03cb5",
".git/objects/d0/2e58f22464907e047660598b3510d833858814": "6bbf4ee02b4b417a7d08f672e8deee4d",
".git/objects/d0/e50dd13b918660ccbaa9064857e4eb293b31f1": "a2e7542772b4f6a0bea7328a36bb7085",
".git/objects/03/669ed181aea6d15ff3288b8827fbc2cf2810df": "63009c27e12eef0ecf380f0e33e3482b",
".git/objects/03/c0bc7baccb6eae6225051ebf11b3f3c6d586fe": "c0811abff783f487e7fca6df05e94fbe",
".git/objects/83/55e6f663fe15a2d063c9181fd17a5439d1f4d3": "617fb646dd8b19d3034c6bdc052e38ee",
".git/objects/00/2c8f3218c886e6353ee72f462bebf2bccf4da2": "65ee106f62be231bca5f16f23345ef4b",
".git/objects/84/7b1e516cd5fe88056b659d98400c86c3dab518": "954d36d44147714409d0e1cd16569ff1",
".git/objects/29/ec9b4ee43281c95e6ebeafabcfdc9c3efbeb2f": "93d6296be0094d96dbdf5aa0359f3689",
".git/objects/b9/454965cde750a28fe9b20ee528fa105cd3c1bb": "e9cfd9d18e71ec6fea206af41e1999da",
".git/objects/ec/c3da8eb558d2fbc94393fc0f169e97f3e82d78": "16a51059142ff83086c218176ef740ca",
".git/objects/ec/4f18e42bc17fb825debdc11fa3838947cab378": "189e56f6a25419884b661a404cd06cb2",
".git/objects/ec/2781c065e0221f5d5a3d2d91920537d0122ed6": "935c8d71d7659671599fe85d79187100",
".git/objects/3b/6b2368a132b0578c8819add9e1228406e85967": "9b2c414a6bb68b15132b503acf1a366e",
".git/objects/3b/2982fd029974c48cf3808327cde15d49255e4a": "198b69edfc1e24aeda9f232424ca4c15",
".git/objects/ae/c09cb380ee10c8b4ea0afd23d77b89b92a142e": "91ecd0340c36e494a0a99ffbb140e871",
".git/objects/ff/d362cf409c25fcca0452e59b5ff332031b143c": "55fc85dd21bbbf1046e82b9077dfa0c8",
".git/objects/e0/e8010f20e36a6a2e798345b8d7fe4931e114e1": "00e41af0b26f2c737ca1da166341a457",
".git/objects/b4/127643d455b13794a52c7a04eb07c771461e17": "c48df0f1dd677628c7d5138bae3aa057",
".git/objects/85/7bc5f18defa7946dae98b98b812558a8f982dd": "d88111f5e8c46e7089db217bf1814298",
".git/objects/9d/5adb9563a700f1d9b29de9fb08e93dde2225f9": "959b37764c679dc0957495016551692a",
".git/objects/db/1754b173ffeedf132dfeb61ebdc787fde8ec8e": "51dc8fe9bbfa05825a3ed0392bf5d387",
".git/objects/db/0d8825a3ccbd27b8a0f9527306d3f81bc79517": "7c1f02abe1ef7589e162dfd9e110cbc5",
".git/objects/f0/f4e6198a5c65e74b71a8bc07e07a3be4a2381c": "e1ba3c2f84f6a489c615aa5045307cfe",
".git/objects/42/ca6bf64cebd4eb4bd93aea3cd6abb1247be052": "25afe4bf21e29fa684682023a593ff85",
".git/objects/18/a50bf3eaec592b5121aa5f0f73187c50fc2be8": "9d8c7bc3eea56dd134a8f3672398924b",
".git/objects/18/575d7c855e8ba4ed5fa460e9fbeb4b529e831c": "94ce42334d0fb9a1715c518f6989ef48",
".git/objects/a6/c68f29eab0f2125edb24eca76efa7e644a187a": "be2861cd31ed0890a230f69e3bb6ba16",
".git/objects/cc/6391972aa8bbf4940de6f77e774a39b0115dd3": "fe67ae2db65da27bc978fd4b7e12a115",
".git/objects/cc/83bef222f620feaaac508b2f2fa7eaebeb29a3": "9f5aee19f0c213ca32b3715c2b98bf28",
".git/objects/65/782e26465c57d85d269cbdfc727f044650d8dc": "b538d9b4ef25f0ad13643ca997e41239",
".git/objects/65/cd4f2462811831c0aea8487d4ab884e43c0d38": "5007e258961fc5162e104f8bc64b0c42",
".git/objects/3c/b5acf4b84dc03ae34a0f56ac655d299ffa57a2": "16fc0e1c25013f238a9f0263e294c009",
".git/objects/e8/a0e839cce73a8e3101925e3e992bfaf07d61de": "ff2b48343b174eef53c93991e0d379cb",
".git/objects/21/0e437b0a456801673be048720e346d44d018bd": "c867972906d9494c591174b3c1c67009",
".git/objects/20/31e0d180286f8b5ba56449c60c9271340ad2f5": "ff7478a91a519fe5a9711caf2849234f",
".git/objects/20/3000d5ec56c641b5d9dd697cb7ba83801bb821": "b3c91d3751839305907213bdde8856aa",
".git/objects/38/9de1ad5f8a69816624c11d23dbf80b2f57336b": "dbd89a33f8a2e7b6fbe9bf1b26ffa503",
".git/objects/a7/971faf983ecdac6a3a6229bda4d405d3fd34b9": "745308455eff7890f48fac87721b0939",
".git/objects/a7/6b141cf640af72fb4080b11603998311a97e38": "2b277efac86ddb535d9c6350e52b1576",
".git/objects/df/e267118d4ee90f9b77de617288e6990dcf26ff": "41cb3df9f6944ec279aa18226a8d3c4e",
".git/objects/96/32d1e74882eb831a875dc3c9677a2cc5c58c9d": "d79795edbd971c1c21739b8e67e397e9",
".git/objects/4c/53568a9cc42dc324db40b0ee7561cb6f66e915": "d89f3391a535f32fb31732906dc76585",
".git/objects/95/6cabc9b8fe5e01bfcb270584fcc3719537a11b": "dc6d9ae759ac6dff603d964ddc542723",
".git/objects/f7/255369c019256ac59dabbfcb0a04c29c944906": "389f9a4dbd2129db9688b59ef8a75dee",
".git/objects/69/c36995e8f7d1c49eb2fc733d5b0113f06bba11": "c6df7acabb208adcdcdc9e31740c35a2",
".git/objects/dd/f86733cd21f541629ca175e7161d64cb200471": "0cfbf8f62e555b2f14f7fd46b6a1de0e",
".git/objects/72/6deef68feee792f757a9b700da020767229055": "2edba9c2d91b33f5b2bb0cfe2aca21ce",
".git/objects/72/b0795bafe04656872ab153f6f83235c759ef49": "1d8fc8a0eb5ad64a0bed747424076e48",
".git/objects/60/1424bac7134c110d50b44d5aa31c61c4453af6": "693b8828f22ca5a3a1f059824b95efe9",
".git/objects/ee/9b02bcccae733c1bf2310726cc61d668aedd3c": "61c6103c6faafb60f4ab8e496f4ff174",
".git/objects/bc/83239224fe1d9e9bc92c9e233923802cceae2c": "2b39d61b06a113f6b99e1112bace4aeb",
".git/objects/f5/80bebeff2b894e801506aed312448bb1b7f035": "8d5e0ab9d223034a45ffe2aa18a33a48",
".git/objects/26/c2e76a23fdd36c2388cedaaabe3fdc3b84828d": "b7ded51eebfa2a102c3f89e97fc2d019",
".git/objects/48/dc1c655ec9df7637bb3ab150d3f05d1125c602": "329827117b6526c0b6b1710111842485",
".git/objects/33/9d2a8c7bc82504213a46efe7b5c8cc330bbbf2": "4b638bd658d40f7985d361ea8ce9fa3e",
".git/objects/11/b3085aab020c4548cbe99f7c4b0bbfecfecff1": "051156e6633e49073b59ff547e46b482",
".git/objects/e3/4bd740890d1e86e1deaef777f424aff35178da": "d9b1f13931d598f55414370d8df4f5f4",
".git/objects/14/38c14b1e669d751cbe3257c6dcec6d2f949728": "f02aff30bf74a59d3c8e8f0204cb9bb5",
".git/objects/05/5357fbdd76cbab001e8ec4f3a65f9526d4f27e": "74caa639e88252561ffdd24d4d8e2613",
".git/COMMIT_EDITMSG": "2ce5c83d37d463a66dae1acbcb46e3a1",
".git/logs/HEAD": "3531200ea88834faf9ebad07f6fd6035",
".git/logs/refs/heads/master": "3531200ea88834faf9ebad07f6fd6035",
".git/logs/refs/remotes/origin/master": "5eab4cb97ee9c520b0d77452e6cd2b5a",
".git/config": "30df49e8c182389ccc67232d43771d76",
".git/index": "b8b7dfb6e0d108b88d6ca461648d4db5"
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
