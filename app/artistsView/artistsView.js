'use strict';

angular.module('myApp.artistsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artistsView', {
    templateUrl: 'artistsView/artistsView.html',
    controller: 'ArtistsViewCtrl'
  });
}])

.controller('ArtistsViewCtrl', [function() {

}]);
