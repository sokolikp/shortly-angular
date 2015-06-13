angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(loc) {
    console.log($location);
    console.log(loc);
    $scope.location = '';
    Links.addLink(loc).then(function(data) {
      console.log("Success!");
    });
  };
});
