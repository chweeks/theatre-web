'use strict';

angular.module('myApp.takingPartsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/takingPartsView', {
    templateUrl: 'takingPartsView/takingPartsView.html',
    controller: 'TakingPartsViewCtrl'
  });
}])

.controller('TakingPartsViewCtrl', [function() {

}]);
