"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope', '$interval', function($scope, $interval) {
	
	$scope.randomValue = -999;

	$scope.names = ['David', 'Laura', 'Eris'];

	$scope.quantity = 20;
	$scope.cost = 1.99;

	$scope.pWidth = 100;

	$interval(function(){//This $interval function is executed every 2 seconds
		$scope.randomValue = Math.round(Math.random() * (1000000));
	}, 2000);
}]);