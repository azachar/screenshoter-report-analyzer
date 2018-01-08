/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var CI = function() {
  this.buldNumber = element(by.binding('main.data.ci.build'));
  this.branch = element(by.binding('main.data.ci.branch'));
  this.tag = element(by.binding('main.data.ci.tag'));
  this.sha = element(by.binding('main.data.ci.sha'));
  this.name = element(by.binding('main.data.ci.name'));
};

var Stat = function() {
  this.total = element(by.binding('main.data.tests.length'));
  this.passed = element(by.binding('main.data.stat.passed'));
  this.failed = element(by.binding('main.data.stat.failed'));
  this.disabled = element(by.binding('main.data.stat.disabled'));
  this.pending = element(by.binding('main.data.stat.pending'));
  this.generatedOn = element(by.binding('main.data.generatedOn'));
};

var ProgressBar = function() {
  this.passed = element(by.css('div.progress-bar-success'));
  this.failed = element(by.css('div.progress-bar-danger'));
  this.pending = element(by.css('div.progress-bar-info'));
  this.disabled = element(by.css('div.progress-bar-muted'));
};

var MainPage = function() {
  this.ci = new CI();
  this.stat = new Stat();
  this.progressBar = new ProgressBar();
};

module.exports = new MainPage();
