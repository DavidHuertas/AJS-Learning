"use strict";

angular.module('myApp', ['ngSanitize']);

angular.module('myApp').controller('MainController', ['$sce', function($sce) {

	this.enableStyles = function() {
		this.style1 = {
			color: "red",
			fontSize: "16px"
		};

		this.style2 = {
			color: "blue",
			fontSize: "10px"
		};
	};

	this.disableStyles = function() {
		this.style1 = null;
		this.style2 = null;
	};

}]);