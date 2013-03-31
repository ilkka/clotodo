define(function() {
  function PhoneListController($scope) {
    $scope.phones = [
      {
        "name"    : "Nexus S",
        "snippet" : "Blah blah de blah"
      }
    ];
  }

  return {
    PhoneListController: PhoneListController
  }
});