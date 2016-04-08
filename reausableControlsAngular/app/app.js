'use strict';

var app = angular.module('myApp', []);

app.controller('personController', [function(){
    var self = this;
    self.person = {firstName: 'Peter', lastName: 'Smith'};
}]);


app.filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});


app.filter('lastnameFirstname', function () {
  return function (input) {
    return input.lastName + ", " + input.firstName;
  };
});