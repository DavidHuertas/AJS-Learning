"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	this.user = {
		name: 'David Orchards',
		accountType: 'CHECKING',
		balance: 1349.2,
		lastLogin: new Date('March 27, 2018 17:12:00')
	};

}]);

angular.module('myApp').filter('capitalize', function() {

	return function(value) {
		var words = value.split(' ');
		for (var counter = 0; counter < words.length; counter++) {
			words[counter] = words[counter].substr(0,1).toUpperCase() + words[counter].substr(1).toLowerCase();
		}
		return words.join(' ');
	};
});