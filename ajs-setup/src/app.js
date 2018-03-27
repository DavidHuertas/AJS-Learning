"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {

	//this.data = {name:'John', age:32};
	//this.data = [1,2,3];
	//this.data = 'this is a string';
	//this.data = 123513,124;
	//this.data = NaN;
	//this.data = new Date();
	//this.data = angular.element('<p></p>');
	this.results = [];

	var isObject = 'Is Object? \t' + angular.isObject(this.data);
	var isArray = 'Is Array? \t' + angular.isArray(this.data);
	var isString = 'Is String? \t' + angular.isString(this.data);
	var isNumber = 'Is Number? \t' + angular.isNumber(this.data);
	var isDate = 'Is Date? \t' + angular.isDate(this.data);
	var isElement = 'Is Element? \t' + angular.isElement(this.data);
	var isDefined = 'Is Defined? \t' + angular.isDefined(this.data);
	var isUndefined = 'Is Undefined? \t' + angular.isUndefined(this.data);

	this.results.push(isObject, isArray, isString, isNumber, isDate, isElement, isDefined, isUndefined);

}]);