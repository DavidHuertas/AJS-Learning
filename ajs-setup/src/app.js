"use strict";

angular.module('myApp', []);

angular.module('myApp').factory('RandomNameService', function($q, $timeout) {

	var firstNames = ['David', 'Scott', 'Joe', 'Michael', 'Mark', 'Scott'];
	var middleNames = ['Anson', 'Paul', 'George', 'Israel', 'Mathew', 'Todd'];
	var lastNames = ['Smith', 'Nicolas', 'Milles', 'Roberts', 'Johnson'];

	return {

		getName: function(nameType) {

			var defer = $q.defer();
			var duration = Math.round(Math.random() * 3000);

			$timeout(function() {
				var name = '';
				switch(nameType) {
					case 'first':
						name = firstNames[Math.floor(Math.random() * firstNames.length)];
						break;
					case 'middle':
						name = middleNames[Math.floor(Math.random() * middleNames.length)];
						break;
					case 'last':
						name = lastNames[Math.floor(Math.random() * lastNames.length)];
						break;
				}

				defer.resolve(name);
			}, duration);

			return defer.promise;
		}
	};
});

angular.module('myApp').controller('MainController', ['$q', 'RandomNameService', function($q, RandomNameService) {

	var vm = this;

	var firstNamePromise = RandomNameService.getName('first');
	var middleNamePromise = RandomNameService.getName('middle');
	var lastNamePromise = RandomNameService.getName('last');

	
	//EN ESTA PARTE DE CÓDIGO VEMOS CÓMO TARDAN EN CARGAR LOS DISTINTOS HILOS

	firstNamePromise.then(function(name) {
		vm.firstName = name;
	});

	middleNamePromise.then(function(name) {
		vm.middleName = name;
	});

	lastNamePromise.then(function(name) {
		vm.lastName = name;
	});
	
	//_________________________________________
	//EN ESTA PARTE DE CÓDIGO VEMOS LA MISMA FUNCIÓN ANTERIOR, PERO SÓLO PUBLICA CUANDO 
	//TODOS LOS HILOS HAN TERMINADO
	/*
	var completed = $q.all([firstNamePromise, middleNamePromise, lastNamePromise]);

	completed.then(function(data) {
		vm.firstName = data[0];
		vm.middleName = data[1];
		vm.lastName = data[2];
	});
	*/

}]);
