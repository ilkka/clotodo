require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery',
    angular: 'lib/angular',
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularMocks': {deps:['angular'], 'exports':'angular.mock'},
  },
});

require(['jquery', 'angular', 'app'],
  function($, angular) {
    'use strict';
    $(document).ready(function() {
      var $html = $('html');
      angular.bootstrap($html, ['app']);
      $html.addClass('ng-app');
    });
  }
);