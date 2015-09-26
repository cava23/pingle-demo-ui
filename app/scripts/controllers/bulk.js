'use strict';

/**
 * @ngdoc function
 * @name pingleDemoUiApp.controller:BulkCtrl
 * @description
 * # BulkCtrl
 * Controller of the pingleDemoUiApp
 */
angular.module('pingleDemoUiApp')
  .controller('BulkCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

    (function initialize() {
      $rootScope.activePage = 'bulk';
      $scope.showForm = false;
    })();

  }]);
