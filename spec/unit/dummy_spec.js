define([
  'angular',
  'angularMocks',
  'controllers'
  ], function(angular, mocks) {
    'use strict';
    var scope;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      angular.module('app')
        .controller('AsdfController',
                    ['$scope', function($scope) { $scope.phones = [1, 2, 3]; }]);
      var ctrl = $controller('AsdfController', {$scope: scope});
    }));

    describe('Controllers', function() {
      describe('PhoneListController', function() {
        it('creates a "phones" model with 3 phones', function() {
          expect(scope.phones.length).toBe(3);
        });
      });
    });
  });