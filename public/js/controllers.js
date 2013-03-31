define(['angular', 'app'], function(angular) {
  'use strict';
  angular.module('app').controller('PhoneListController',
    ['$scope', function($scope) {
      $scope.phones = [
        {
          "name"    : "Nexus S",
          "snippet" : "Blah blah de blah"
        },
        {
          "name"    : "Plexus S",
          "snippet" : "Blah blah de blah"
        },
        {
          "name"    : "Sexus S",
          "snippet" : "Blah blah de blah"
        }
      ];
    }
  ]);
});