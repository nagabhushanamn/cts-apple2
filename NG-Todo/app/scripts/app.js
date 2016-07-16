'use strict';

/**
 * @ngdoc overview
 * @name ngTodoApp
 * @description
 * # ngTodoApp
 *
 * Main module of the application.
 */
angular
  .module('ngTodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider,localStorageServiceProvider) {
	
	localStorageServiceProvider.setPrefix('Todos');
    
	$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
	
  });
