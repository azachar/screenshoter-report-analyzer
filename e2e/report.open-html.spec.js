'use strict';

var utils = require('./utils');

describe('The report - open html view', function() {
  var page, spec;

  beforeAll(function() {
    utils.serveMockReport('open.report.json')
  });

  beforeEach(function() {
    browser.get('/index.html#/report/screenshots');
    page = require('./report.po');
  });

  afterEach(function() {
    utils.clearStorage();
  });

  it('should display open html for expectation', function() {
    spec = page.getSpec(0);
    spec.title.click();
    var screenshot = spec.getFailedExpect(0).getScreenshot(0);
    expect(screenshot.openHTML.isPresent()).toBeTruthy();
    utils.scrollIntoView(screenshot.openHTML);
    screenshot.openHTML.click();
  });

  it('should display open html for specDone', function() {
    page.filtering.specDone.click();

    spec = page.getSpec(0);
    spec.title.click();
    var screenshot = spec.getScreenshot(0);
    expect(screenshot.openHTML.isPresent()).toBeTruthy();
    utils.scrollIntoView(screenshot.openHTML);
    screenshot.openHTML.click();
  });
});
