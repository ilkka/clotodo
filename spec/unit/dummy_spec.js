define([
  'angular',
  'app',
  'controllers'
  ], function(angular, app, controllers) {
    'use strict';

    describe('Controllers', function() {
      describe('PhoneListController', function() {
        it('creates a "phones" model with 3 phones', function() {
          var scope = {},
            ctrl = new controllers.PhoneListController(scope);

          expect(scope.phones.length).toBe(3);
        });
      });
    });
  });