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
  };

  this.scrollIntoView = function(el) {
    return browser.executeScript(function(el) {
      el.scrollIntoView();
    }, el.getWebElement());
  };

  this.clearStorage = function() {
    browser.executeScript("window.localStorage.clear();");
    browser.executeScript("window.sessionStorage.clear();");
  }
}

module.exports = new Utils();
