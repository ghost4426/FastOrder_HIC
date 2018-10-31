var app = new Framework7({
    routes: [
      {
        name: 'home',
        path: '/',
        url: './index.html',
      },
      {
        name: 'qrcode',
        path: '/home/qrcode',
        url: './scanQrcode.html'
      },
      // Default route, match to all pages (e.g. 404 page)
      {
        path: '(.*)',
        url: './pages/404.html',
      },
    ],
  });