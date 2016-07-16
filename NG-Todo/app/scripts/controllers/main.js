'use strict';

/**
 * @ngdoc function
 * @name ngTodoApp.controller:MainCtrl
 * @description # MainCtrl Controller of the ngTodoApp
 */
angular.module('ngTodoApp').controller('MainCtrl', function($scope,localStorageService) {
	
	var todosInStore = localStorageService.get('todos');
	$scope.todos = todosInStore || [];
	
	$scope.todo = '';
	$scope.addTodo = function() {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};

	$scope.removeTodo = function(index) {
		$scope.todos.splice(index, 1);
	};

	$scope.$watch('todos', function () {
		 localStorageService.set('todos', $scope.todos);
	},true);
	
});
