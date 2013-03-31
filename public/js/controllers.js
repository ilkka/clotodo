define(['angular', 'app'], function(angular) {
  'use strict';
  angular.module('app').controller('TodoListController',
    ['$scope', function($scope) {
      $scope.todos = [
        {
          "label": "Buy milk",
          "createdAt": "2013-01-01T12:00:00Z"
        },
        {
          "label": "Buy eggs",
          "createdAt": "2013-01-02T12:00:00Z"
        },
        {
          "label": "Learn Angular.js",
          "createdAt": "2013-01-04T12:00:00Z"
        },
        {
          "label": "Learn Clojure",
          "createdAt": "2013-01-03T12:00:00Z"
        },
      ];
      $scope.sortProp = 'label';
    }
  ]);
});