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
  'angular',
  'angularMocks',
  'app',
  '/base/spec/unittests.js',
  ], function(angular, mocks, app) {
    window.__karma__.start();
  });