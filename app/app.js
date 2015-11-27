'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.introView',
  'myApp.menuView',
  'myApp.artistsView',
  'myApp.directorsView',
  'myApp.filmsView',
  'myApp.financesView',
  'myApp.highlightsView',
  'myApp.prodHighlightsView',
  'myApp.prodHighlightsTwoView',
  'myApp.supportersView',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/introView'});
}]);
