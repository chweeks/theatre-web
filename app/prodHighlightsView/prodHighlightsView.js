'use strict';

angular.module('myApp.prodHighlightsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prodHighlightsView', {
    templateUrl: 'prodHighlightsView/prodHighlightsView.html',
    controller: 'ProdHighlightsViewCtrl'
  });
}])

.controller('ProdHighlightsViewCtrl', [function() {

}]);
