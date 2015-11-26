'use strict';

angular.module('myApp.menuView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menuView', {
    templateUrl: 'menuView/menuView.html',
    controller: 'MenuViewCtrl'
  });
}])

.controller('MenuViewCtrl', [function() {

}]);
