angular.module('myApp')
.controller('differentController', function($scope, mainService) {
  $scope.user = mainService.getUser();

  $scope.changeUsername = function(newUsername) {
    mainService.changeUsername(newUsername);
  }
})
