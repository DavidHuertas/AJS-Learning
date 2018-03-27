"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$scope', function($scope) {

	var vm = this;

	vm.specialName = 'David Orchards';
	vm.message = '';
	vm.name = 'Dave Grohl';

	$scope.$watch('main.name', function(newValue, oldValue) {

		console.log('newValue: ', newValue, ', oldValue: ', oldValue);

		if (newValue == vm.specialName) {
			vm.message = 'Hello! We\'ve been waiting for you';
		} else {
			vm.message = '';
		}
	});
}]);
