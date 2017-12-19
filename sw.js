let version = '0.0.1';

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open('service-worker').then(cache => {
			return cache.addAll([
				'/',
				'https://raw.githubusercontent.com/darkestblue91/service-worker/master/pug-o-clock.jpg',
				'https://raw.githubusercontent.com/darkestblue91/service-worker/master/timer.js'
			])
			.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate',  event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request, { ignoreSearch:true }).then(response => {
			return response || fetch(event.request);
		})
	);
});
