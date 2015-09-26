'use strict';

/**
 * @ngdoc function
 * @name pingleDemoUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pingleDemoUiApp
 */
angular.module('pingleDemoUiApp')
  .controller('MainCtrl', ['$rootScope', '$scope', 'apiService', function ($rootScope, $scope, apiService) {

    $scope.getTradeOptions = function(selectedState) {
      apiService.getTradeOptions(selectedState).then(function(options) {
        $scope.tradeOptions = options;
        $scope.selectedTrade = $scope.tradeOptions[0].value;
      });
    };

    $scope.submit = function() {
      return apiService.verifyLicense($scope.selectedState, $scope.selectedTrade, $scope.licenseNumber)
        .then(function(result) {
          console.log(result);
          $scope.verificationComplete = true;
          $scope.taskResults = result;
        })
        .catch(function(error) {
          alert('Something went wrong! Check the console for the error.');
          console.log(error);
        });
    };

    (function initialize() {
      $rootScope.activePage = 'home';
      $scope.showForm = false;
      $scope.verificationComplete = false;
      $scope.selectedState = 'WA';
      $scope.getTradeOptions($scope.selectedState);
    })();

  }]);
