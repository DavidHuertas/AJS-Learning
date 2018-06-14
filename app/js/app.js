"use strict";

angular.module('myApp', ['ngSanitize']);

angular.module('myApp').controller('MainController', ['$sce', function($sce) {

	this.imageUrl = 'img/gibson_sg.jpg';
	this.linkUrl = 'http://www.davidorchards.com';

}]);