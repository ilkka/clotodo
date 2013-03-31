define(['angular', 'app'], function(angular) {
  'use strict';
  angular.module('app').controller('TodoListController',
    ['$scope', function($scope) {
      $scope.todos = [
        {
          "label": "Buy milk"
        },
        {
          "label": "Buy eggs"
        },
        {
          "label": "Learn Angular.js"
        },
        {
          "label": "Learn Clojure"
        },
      ];
    }
  ]);
});