'use strict';

/**
 * @ngdoc service
 * @name pingleDemoUiApp.apiService
 * @description
 * # apiService
 * Service in the pingleDemoUiApp.
 */
angular.module('pingleDemoUiApp')
  .service('apiService', function ($q) {
    var tradesByState = {
      WA: [
        {
          label: 'Electrician',
          value: 'electrician'
        },
        {
          label: 'General Contractor',
          value: 'general'
        },
        {
          label: 'Plumber',
          value: 'plumber'
        }
      ],
      CA: [
        {
          label: 'General Contractor',
          value: 'general'
        },
        {
          label: 'Plumber',
          value: 'plumber'
        }
      ]
    };

    this.verifyLicense = function(state, trade, licenseNumber) {
      return $q.when({
        businessName: 'Microsoft, Inc.',
        businessAddress: {
          address: '505 E Denny Way',
          address2: '#402',
          city: 'Redmond',
          state: 'WA',
          zipCode: '98122',
          phone: '(206) 567-3645'
        },
        lastName: 'Crowell',
        firstName: 'Andrew',
        email: 'andrewj.crowell@gmail.com'
      });
    };

    this.getTradeOptions = function(state) {
      return $q.when(tradesByState[state]);
    };

  });
