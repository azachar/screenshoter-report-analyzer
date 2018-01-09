'use strict';

var utils = require('./utils');

describe('The report - dump view', function() {
  var page, spec;

  beforeAll(function() {
    utils.serveMockReport('dump.report.json')
  });

  beforeEach(function() {
    browser.get('/index.html#/report/screenshots');
    page = require('./report.po');
  });

  afterEach(function() {
    utils.clearStorage();
  });

  it('should display dump attachment for expectation', function() {
    spec = page.getSpec(0);
    spec.title.click();

    var failedExpect = spec.getFailedExpect(0);
    expect(failedExpect.dump.showDump.isDisplayed()).toBeTruthy();
    failedExpect.dump.showDump.click();
    expect(failedExpect.dump.content.getText()).toBe('extra data captured at failed expectation');
  });

  it('should display dump attachment for specDone', function() {
    page.filtering.specDone.click();

    spec = page.getSpec(0);
    spec.title.click();

    expect(spec.dump.showDump.isDisplayed()).toBeTruthy();
    spec.dump.showDump.click();
    expect(spec.dump.content.getText()).toBe('extra data captured at spec done');
  });
});
