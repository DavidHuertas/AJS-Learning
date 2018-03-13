"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', ['$scope', function($scope) {


	$scope.model = {
		name: 'John Smith'
	};

	$scope.name = 'John Doe';

}]);

angular.module('myApp').controller('ChildController', ['$scope', function($scope) {

}]);

angular.module('myApp').controller('IndependantController', ['$scope', function($scope) {

	$scope.model = {
		name: 'Michael Jackson'
	};

}]);