'use strict';


var Screenshot = function(parent) {
  this.openHTML = parent.element(by.partialLinkText('Open HTML'));
};

var Dump = function(parent){
  this.showDump = parent.element(by.partialButtonText('Show attached dump'));
  this.content = parent.element(by.binding('$ctrl.model'));
}

var Expectation = function(parent) {
  this.dump = new Dump(parent.element(by.css('dump')));
  this.screenshots = parent.all(by.css('screenshots'));

  this.getScreenshot = function(index) {
    var row = this.screenshots.get(index);
    return new Screenshot(row);
  };
};

var Spec = function(parent) {
  this.title = parent.element(by.css('h3'));
  this.failedExpectations = parent.all(by.css('expectations'));

  this.getFailedExpect = function(index) {
    var row = this.failedExpectations.get(index);
    return new Expectation(row);
  };
  this.dump = new Dump(parent.element(by.css('dump.spec-dump')));

  this.screenshots = parent.all(by.css('screenshots[model="$ctrl.test.specScreenshots"]'));

  this.getScreenshot = function(index) {
    var row = this.screenshots.get(index);
    return new Screenshot(row);
  };
};

var Filtering = function(parent) {
  this.specDone = parent.element(by.partialButtonText('Show after spec done screenshots'));
};

var ReportPage = function() {
  this.list = browser.element.all(by.css('spec'));
  this.filtering = new Filtering(browser);
  this.getSpec = function(index) {
    var row = this.list.get(index);
    return new Spec(row);
  };
};

module.exports = new ReportPage();
