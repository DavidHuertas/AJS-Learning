"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	this.users = [
	{
		firstName: 'JOHN',
		lastName: 'doe',
		accountType: 'CHECKING',
		balance: 1349.2,
		birthday: 25792760000,
	},
	{
		firstName: 'JIMMY ',
		lastName: 'kiMMEL',
		accountType: 'CHECKING',
		balance: 1245.33,
		birthday: 48826440000,
	},
	{
		firstName: 'DAVid',
		lastName: 'orChaRDS',
		accountType: 'CHECKING',
		balance: 4788.89,
		birthday: -13580280000,
	},
	{
		firstName: 'LAURA',
		lastName: 'contoNAHUER',
		accountType: 'CHECKING',
		balance: 1349.2,
		birthday: 24721200000,
	},
	{
		firstName: 'MELISSA ',
		lastName: 'auf der maur',
		accountType: 'CHECKING',
		balance: 1349.2,
		birthday: 25542760000,
	}

	];

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