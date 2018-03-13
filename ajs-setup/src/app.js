"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	this.user = [
	{
		firstName: 'JOHN',
		lastName: 'doe',
		accountType: {
			accountId: 1111222233334444,
			name: 'checking'
		},
		balance: 1349.2,
		birthday: 25792760000,
		hobbies: ['music', 'videogames', 'programming']
	}];

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