'use strict';

/**
 * @ngdoc overview
 * @name pingleDemoUiApp
 * @description
 * # pingleDemoUiApp
 *
 * Main module of the application.
 */
angular
  .module('pingleDemoUiApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/bulk', {
        templateUrl: 'views/bulk.html',
        controller: 'BulkCtrl',
        controllerAs: 'bulk'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
