'use strict';

var utils = require('./utils');

describe('The main view', function() {
  var page;

  beforeEach(function() {
    utils.serveMockReport('main.report.json')
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
    expect(page.ci.buildNumber.getText()).toBe('Number: 801');
    expect(page.ci.branch.getText()).toBe('Branch: test-unstable');
    expect(page.ci.tag.getText()).toBe('TAG: v1.0.0');
    expect(page.ci.commit.getText()).toBe('feat(ui): the great\nline 1\nline 2\nline 3\nline 4');
    expect(page.ci.sha.getText()).toBe('SHA: 0217b5a73794860d2d76e7c322386f0a95b5d427');
    page.ci.buildNumber.click();
  });

  it('should display header', function() {
    expect(page.header.buildNumber.getText()).toBe('801');
    expect(page.header.branch.getText()).toBe('test-unstable');
    expect(page.header.commit.getText()).toBe('feat(ui): the great');
  });

  it('should open header build on CI', function() {
    page.header.buildNumber.click();
  });

  it('should open content build on CI', function() {
    page.ci.buildNumber.click();
  });

});
