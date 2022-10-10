---
---
importScripts('/workbox/workbox-sw.js?v={{ "now" | date: "%s" }}');

const {skipWaiting, clientsClaim} = workbox.core;
const {registerRoute, NavigationRoute, setCatchHandler} = workbox.routing;
const {CacheFirst, NetworkOnly} = workbox.strategies;
const navigationPreload = workbox.navigationPreload;

skipWaiting();
clientsClaim();

const SW_VERSION = '运行';
addEventListener('message', (event) => {
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage(SW_VERSION);
  }
});

const getVersion = (url) => {
  return Number(String(url).split("?v=")[1]);
};

const matchFunction = ({url, event}) => {
 if(String(url).indexOf("?")!=-1&&getVersion(url)) {
caches.open('resources').then(function(cache) {
  cache.keys().then(function(keys) {
    keys.forEach(function(request, index, array) {
      if(String(request.url).indexOf(String(url).split("?")[0])!=-1&&getVersion(url)>getVersion(request.url))
      {
        cache.delete(request);
      }
    });
  });
})
   return true;
 }
  return false;
};

registerRoute(
  matchFunction,
  new CacheFirst({
    cacheName: 'resources'
  })
);

navigationPreload.enable();
const strategy = new NetworkOnly({
  cacheName: 'documents',
});
const navigationRoute = new NavigationRoute(strategy);
registerRoute(navigationRoute);

setCatchHandler(({event}) => {
  switch (event.request.destination) {
    case 'document':
      return Response.error();//caches.match(FALLBACK_HTML_URL);
    break;

    case 'image':
      return Response.error();//caches.match(FALLBACK_IMAGE_URL);
    break;

    default:
      return Response.error();
  }
});
