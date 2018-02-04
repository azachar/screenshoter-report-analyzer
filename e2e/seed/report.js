angular.module('reporter').constant('data', {
  "tests": [{
    "start": "2016-12-01T23:22:15.522Z",
    "specScreenshots": [{
      "img": "screenshots/0177a740-b81d-11e6-a073-77028bc0573c.png",
      "browser": "default",
      "when": "2016-12-01T23:22:20.244Z"
    }],
    "specLogs": [],
    "failedExpectations": [{
      "matcherName": "toEqual",
      "passed": false,
      "message": "Expected 'Hello Andrej!' to equal 'Hello Martin!'.",
      "actual": "Hello Andrej!",
      "expected": "Hello Martin!",
      "error": {},
      "screenshots": [{
        "img": "screenshots/011e1590-b81d-11e6-a073-77028bc0573c.png",
        "browser": "default",
        "when": "2016-12-01T23:22:19.924Z"
      }],
      "logs": [],
      "when": "2016-12-01T23:22:19.369Z",
      "stack": "Error: Failed expectation\n    at Object.<anonymous> (/Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/spec/integrational/protractor/fail-test.js:6:36)\n    at /Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/jasminewd2/index.js:94:23\n    at new ManagedPromise (/Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/selenium-webdriver/lib/promise.js:1082:7)\n    at controlFlowExecute (/Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/jasminewd2/index.js:80:18)\n    at TaskQueue.execute_ (/Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/selenium-webdriver/lib/promise.js:2913:14)\n    at TaskQueue.executeNext_ (/Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/selenium-webdriver/lib/promise.js:2896:21)\n    at /Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/selenium-webdriver/lib/promise.js:2820:25\n    at /Users/azachar/git/github/screenshoter/protractor-screenshoter-plugin/node_modules/selenium-webdriver/lib/promise.js:639:7\n    at process._tickCallback (node.js:369:9)"
    }],
    "passedExpectations": [],
    "end": "2016-12-01T23:22:19.957Z",
    "diff": 4435,
    "timeout": 30000,
    "id": "spec0",
    "description": "should failure",
    "fullName": "angularjs homepage should failure",
    "pendingReason": "",
    "status": "failed"
  }, {
    "start": "2016-12-01T23:22:19.959Z",
    "specScreenshots": [],
    "specLogs": [],
    "failedExpectations": [],
    "passedExpectations": [{
      "matcherName": "toEqual",
      "passed": true,
      "message": "Passed.",
      "actual": "Hello Julie!",
      "expected": "Hello Julie!",
      "error": {},
      "screenshots": [],
      "logs": [],
      "when": "2016-12-01T23:22:21.778Z",
      "stack": ""
    }],
    "end": "2016-12-01T23:22:21.788Z",
    "diff": 1829,
    "timeout": 30000,
    "id": "spec1",
    "description": "should pass",
    "fullName": "angularjs homepage should pass",
    "pendingReason": "",
    "status": "passed"
  }],
  "stat": {
    "passed": 1,
    "failed": 1,
    "pending": 0,
    "disabled": 0
  },
  "ci": {
    "build": "123456789",
    "branch": "feat-super-nice-one",
    "sha": "98sdlfhasidfhasoifdhasfioashdfoiashdfasoidfs",
    "tag": "hello-kitty",
    "name": "Special report name",
    "commit": "feat(menu): nicer look",
    "url": "https://travis-ci.org/azachar/protractor-screenshoter-plugin/builds/337168976"
  },
  "generatedOn": "2016-12-01T23:22:21.798Z"
});
