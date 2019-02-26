const cacheName = 'v6'

self.addEventListener('install', (e) => {
  console.log("service worker installed")
}) 

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.forEach(cache => {
            if(cache !== cacheName){
              return caches.delete(cache)
            }
          })
        )
      })
  )
}) 

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone()
        caches 
          .open(cacheName)
          .then(cache => {
            cache.put(e.request, resClone)
          })
          .catch(cache => {
            return cache.match(e.request);
          })
        return res
      })
      .catch(err => caches.match(e.request).then(res => res))
  )
})