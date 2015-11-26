'use strict';

angular.module('myApp.highlightsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/highlightsView', {
    templateUrl: 'highlightsView/highlightsView.html',
    controller: 'HighlightsViewCtrl'
  });
}])

.controller('HighlightsViewCtrl', [function() {

}]);
