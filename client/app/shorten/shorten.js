angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.spinner = false;
  $scope.linkBody = false;

  $scope.addLink = function(loc) {
    $scope.spinner = true;
    $scope.link.url = loc;
    $scope.location = '';
    Links.addLink($scope.link).then(function(data) {
      console.log("Success!");
      $scope.message = data;
      $scope.spinner = false;
      $scope.linkBody = true;
    });
  };
});
