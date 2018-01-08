'use strict';

describe('The main view', function() {
  var page;

  beforeEach(function() {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should display progress bar', function() {
    expect(page.progressBar.passed.isPresent()).toBeTruthy();
    expect(page.progressBar.passed.getAttribute('aria-valuetext')).toBe('50%');
    expect(page.progressBar.failed.isPresent()).toBeTruthy();
    expect(page.progressBar.failed.getAttribute('aria-valuetext')).toBe('50%');

    expect(page.progressBar.pending.isPresent()).toBeTruthy();
    expect(page.progressBar.pending.getAttribute('aria-valuetext')).toBe('0%');
    expect(page.progressBar.disabled.isPresent()).toBeTruthy();
    expect(page.progressBar.disabled.getAttribute('aria-valuetext')).toBe('0%');
  });
});
