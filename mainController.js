angular.module('myApp')
.controller('mainController', function($scope, mainService) {
  $scope.user = mainService.getUser();
})
