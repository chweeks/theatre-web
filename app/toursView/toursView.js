'use strict';

angular.module('myApp.toursView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/toursView', {
    templateUrl: 'toursView/tourssView.html',
    controller: 'ToursViewCtrl'
  });
}])

.controller('ToursViewCtrl', [function() {

}]);
