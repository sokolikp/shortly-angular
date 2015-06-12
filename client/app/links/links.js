angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // console.log(Links);
  $scope.data = {};
  //visits
  //title
  //code
  //base_url
  //url
  $scope.getLinks = function() {
    Links.$get();
  };

  $scope.getLinks();
});
