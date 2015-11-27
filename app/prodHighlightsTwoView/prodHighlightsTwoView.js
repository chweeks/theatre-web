'use strict';

angular.module('myApp.prodHighlightsTwoView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prodHighlightsTwoView', {
    templateUrl: 'prodHighlightsTwoView/prodHighlightsTwoView.html',
    controller: 'ProdHighlightsTwoViewCtrl'
  });
}])

.controller('ProdHighlightsTwoViewCtrl', [function() {

}]);
