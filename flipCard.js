angular.module('InsertYourModuleHere', [])
.controller('FlipCardController', function(){})
.directive('flipCard', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: '<div class="card-container" ng-transclude></div>',
		link: function (scope, elem, attrs) {
			scope.test ='ima test';
		}
	}
})
.directive('fcFront', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: '<div class="front" ng-transclude></div>',
	}
})
.directive('fcBack', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: '<div class="back" ng-transclude></div>',
	}
});