"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	this.now = new Date();

	this.user = 
	{
		name: 'Dave Grohl',
		birthday: 171781200000,
		lastLogin: 1437705300000
	};

}]);


angular.module('myApp').filter('capitalize', function() {
	return function(value){
		var result = null;
		var words = value.split(' ');
		words.forEach(function(item) {
			if (result) {
				result += ' ';
			}else{
				result = '';
			}
			result += item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase();
		});
		return result;
	};
});