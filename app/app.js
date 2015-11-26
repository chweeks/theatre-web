'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.introView',
  'myApp.artistsView',
  'myApp.directorsView',
  'myApp.filmsView',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/introView'});
}]);
