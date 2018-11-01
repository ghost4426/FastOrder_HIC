// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});

var stepper = app.stepper.create({
  el: '.stepper',
  on: {
    change: function () {
      console.log('Stepper value changed')
    }
  }
});

// Init/Create left panel view
// var mainView = app.views.create('.view-left', {
//   url: '/'
// });

// // Init/Create main view
// var mainView = app.views.create('.view-main', {
//   url: '/'
// });

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

var toastBottom = app.toast.create({
  text: 'Thêm món thành công',
  closeTimeout: 2000,
});
$$('.open-toast-bottom').on('click', function () {
  toastBottom.open();
  
});

var dialog = app.dialog.create({
  text: 'Hello World',
  on: {
    opened: function () {
      console.log('Dialog opened')
    }
  }
});
$$('.open-confirm').on('click', function () {
  app.dialog.confirm('','Bạn có muốn hoàn tất đặt món ?', function () {
    app.dialog.alert('','Thanks!');
  });
});
