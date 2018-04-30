"use strict";

angular.module('myApp', []);

//THIS IS BAD (1
var mainCtrl = null;

angular.module('myApp').controller('MainController', [function() {

	//THIS IS BAD (1)
	mainCtrl = this;

	var vm = this;

	vm.clickCount = 0;

	vm.updateClickCount = function (amount)  {
		vm.clickCount += amount;
	};

}]);

	//THIS IS ALSO BAD (2)
function externalClick(elem, amount) {

	var $scope = angular.element(elem).scope();
	mainCtrl.clickCount += parseInt(amount);
	$scope.$apply();

}