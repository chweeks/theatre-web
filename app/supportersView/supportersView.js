'use strict';

angular.module('myApp.supporterssView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/supporterssView', {
    templateUrl: 'supporterssView/supporterssView.html',
    controller: 'SupporterssViewCtrl'
  });
}])

.controller('SupporterssViewCtrl', [function() {

}]);
