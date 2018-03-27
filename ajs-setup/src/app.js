"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	this.fruitList = ['bananas', 'apples', 'pears', 'cherries', 'peaches'];

	this.user = {
		name: 'John Smith',
		favouriteFruit: 'cherries',
		isActive: true
	}

}]);

angular.module('myApp').filter('yesOrNo', function() {

	return function(value) {
		if (value === true) {
			return 'yes';
		} else if (value === false) {
			return 'no';
		} else {
			return 'unknown';
		}
	};
});