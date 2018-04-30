"use strict";

angular.module('myApp', []);

angular.module('myApp').run(function($rootScope) {

	$rootScope.userModel = {
		name:'John Smith',
		age: 33
	};

	$rootScope.sayHello = function () {
		return 'Hello from AngularJS root scope.';
	};

});

angular.module('myApp').controller('MainController', ['$scope', function($scope) {

	//BE CAREFUL: You can override rootScope with scope (uncomment to check):
	/*
	$scope.userModel = {
		name:'John Doe',
		age: 22
	};

	$scope.sayHello = function () {
		return 'Hello from AngularJS child scope.'
	};
	*/

}]);