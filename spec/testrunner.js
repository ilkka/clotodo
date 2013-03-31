require.config({
  baseUrl: '/base/public/js',
  paths: {
    jquery: 'lib/jquery',
    angular: 'lib/angular',
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularMocks': {deps:['angular'], 'exports':'angular.mock'},
  },
});

require([
  'angular',
  'app',
  ], function(angular, app) {
    window.__karma__.start();
  });