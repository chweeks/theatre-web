'use strict';

angular.module('myApp.filmsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filmsView', {
    templateUrl: 'filmsView/filmsView.html',
    controller: 'FilmsViewCtrl'
  });
}])

.controller('FilmsViewCtrl', [function() {

}]);
