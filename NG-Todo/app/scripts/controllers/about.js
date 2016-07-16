'use strict';

/**
 * @ngdoc function
 * @name ngTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngTodoApp
 */
angular.module('ngTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
