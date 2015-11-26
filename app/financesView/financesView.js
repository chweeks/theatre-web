'use strict';

angular.module('myApp.financesView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/financesView', {
    templateUrl: 'financesView/financesView.html',
    controller: 'FinancesViewCtrl'
  });
}])

.controller('FinancesViewCtrl', [function() {

}]);
