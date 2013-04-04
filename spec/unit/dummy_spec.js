define([
  'angular',
  'angularMocks',
  'controllers'
  ], function(angular, mocks) {
    'use strict';

    describe('TodoListController', function() {
      
      beforeEach(mocks.module('app'));
      
      beforeEach(mocks.inject(function($rootScope, $controller) {
        this.scope = $rootScope.$new();
        $controller('TodoListController', { $scope: this.scope });
      }));

      it('creates a "todos" model with 4 todos', function() {
        expect(this.scope.todos.length).toBe(4);
      });

    });
  });