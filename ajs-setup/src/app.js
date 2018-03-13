"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	this.user = {
		firstName: 'John',
		lastName: 'Doe',
		accountType: 'CHECKING',
		balance: 1349.2
	};

}]);


