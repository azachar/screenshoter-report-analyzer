'use strict';

var utils = require('./utils');

describe('The main view for a local report', function() {
  var page;

  beforeEach(function() {
    utils.serveMockReport('main.local.report.json')
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should display statitics header', function() {
    expect(page.stat.total.getText()).toBe('0'); //due to sample data
    expect(page.stat.passed.getText()).toBe('Passed 4');
    expect(page.stat.failed.getText()).toBe('Failed 3');
    expect(page.stat.pending.getText()).toBe('Pending 2');
    expect(page.stat.disabled.getText()).toBe('Disabled 1');
    expect(page.stat.generatedOn.getText()).toContain('Dec');
  });

  it('should display CI board', function() {
    expect(page.ci.buildNumber.getText()).toBe('Number: N/A');
    expect(page.ci.branch.getText()).toBe('Branch: N/A');
    expect(page.ci.tag.getText()).toBe('TAG: N/A');
    expect(page.ci.sha.getText()).toBe('SHA: N/A');
    expect(page.ci.commit.getText()).toBe('N/A');
  });

  it('should display header', function() {
    expect(page.header.buildNumber.isPresent()).toBeFalsy();
    expect(page.header.branch.isPresent()).toBeFalsy();
    expect(page.header.commit.isPresent()).toBeFalsy();
  });
});
