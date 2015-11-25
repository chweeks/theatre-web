'use strict';

angular.module('myApp.introView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/introView', {
    templateUrl: 'introView/introView.html',
    controller: 'IntroViewCtrl'
  });
}])

.controller('IntroViewCtrl', [function() {

}]);
