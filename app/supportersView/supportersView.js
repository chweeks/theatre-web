'use strict';

angular.module('myApp.supportersView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/supportersView', {
    templateUrl: 'supportersView/supportersView.html',
    controller: 'SupportersViewCtrl'
  });
}])

.controller('SupportersViewCtrl', [function() {

}]);
