define(function() {
  function PhoneListController($scope) {
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

  return {
    PhoneListController: PhoneListController
  }
});