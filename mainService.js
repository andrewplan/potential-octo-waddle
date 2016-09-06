angular.module('myApp')
.service('mainService', function() {
  var user = {
    name: "asBrettisay"
  };

  this.getUser = function() {
    return user;
  };

  this.changeUsername = function(newUsername) {
    user.name = newUsername;
  };
})
