'use strict';

var Utils = function() {
  this.serveMockReport = function(jsonFile) {
    browser.clearMockModules();
    var data = require('./test-data/' + jsonFile);
    browser.addMockModule('reporter', function(data) {
      angular.module('reporter')
        .config(['$provide', function($provide) {
          $provide.constant('data', data);
        }]);
    }, data);
  }
}

module.exports = new Utils();
