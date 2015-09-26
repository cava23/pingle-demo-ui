'use strict';

/**
 * @ngdoc directive
 * @name pingleDemoUiApp.directive:verificationResults
 * @description
 * # verificationResults
 */
angular.module('pingleDemoUiApp')
  .directive('verificationResults', function () {
    return {
      templateUrl: '../../views/verificationresults.html',
      restrict: 'E',
      scope: {
        results: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
