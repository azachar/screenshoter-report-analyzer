'use strict';

const CI = process.env.CI;
const TEST_DEBUG = process.env.TEST_DEBUG;


var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {

  //self hosting with the latest release
  plugins: [{
    package: 'protractor-screenshoter-plugin',
    screenshotOnSpec: 'none',
    writeReportFreq: 'spec',
    pauseOn: TEST_DEBUG && !CI ? 'failure' : 'never'
  }],

  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: CI ? [
        '--lang=en-US',
        '--enable-logging',
        '--no-sandbox',
        '--disable-gpu',
        '--headless'
      ] : [
        '--lang=en-US',
        '--enable-logging',
        '--no-sandbox',
        '--disable-gpu'
      ]
    },
    loggingPrefs: {
      browser: 'ALL' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
    }
  },

  chromeOnly: true,
  directConnect: true,

  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
