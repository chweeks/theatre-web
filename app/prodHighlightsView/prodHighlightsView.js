'use strict';

angular.module('myApp.prodhighlightsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prodHighlightsView', {
    templateUrl: 'prodHighlightsView/prodHighlightsView.html',
    controller: 'ProdHighlightsViewCtrl'
  });
}])

.controller('ProdHighlightsViewCtrl', [function() {

}]);
