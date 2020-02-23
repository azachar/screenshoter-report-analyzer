// https://angular.io/guide/testing#configure-cli-for-ci-testing-in-chrome
const config = require('./protractor.conf').config;
config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
     args: [
       "--headless",
       "--disable-gpu",
       "--no-sandbox",
       "--disable-dev-shm-usage",
       "--window-size=800,600"
     ]
  }
};
exports.config = config;
