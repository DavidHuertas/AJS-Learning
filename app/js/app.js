"use strict";

angular.module('myApp', ['ngSanitize']);

angular.module('myApp').controller('MainController', ['$sce', function($sce) {

	this.class1 = 'redClass';
	this.class2 = 'greenClass';

	this.isSelected = false;

}]);