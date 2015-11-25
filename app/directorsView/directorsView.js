'use strict';

angular.module('myApp.directorsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/directorsView', {
    templateUrl: 'directorsView/directorsView.html',
    controller: 'DirectorsViewCtrl'
  });
}])

.controller('DirectorsViewCtrl', [function() {

}]);
