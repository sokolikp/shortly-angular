angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // console.log(Links);
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.getLinks();
});
