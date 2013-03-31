require.config({
  baseUrl: '/base/public/js',
  paths: {
    jquery: 'lib/jquery',
    angular: 'lib/angular',
    angularMocks: '/base/spec/lib/angular-mocks'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularMocks': {deps:['angular'], 'exports':'angular.mock'},
  },
});

require([
  // 'angular',
  // 'angularMocks',
  // 'app',
  // 'controllers',
  '/base/spec/unittests.js',
  ], function() {
    window.__karma__.start();
  });