[![npm](https://img.shields.io/npm/dm/screenshoter-report-analyzer.svg?style=flat-square)](https://www.npmjs.com/package/screenshoter-report-analyzer)
[![npm](https://img.shields.io/npm/dt/screenshoter-report-analyzer.svg?style=flat-square)](https://www.npmjs.com/package/screenshoter-report-analyzer)

[![npm](https://img.shields.io/npm/v/screenshoter-report-analyzer.svg?style=flat-square)](https://www.npmjs.com/package/screenshoter-report-analyzer)
[![npm](https://img.shields.io/npm/l/screenshoter-report-analyzer.svg?style=flat-square)](https://www.npmjs.com/package/screenshoter-report-analyzer)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)

[![Dependency Status](https://david-dm.org/azachar/screenshoter-report-analyzer.svg)](https://david-dm.org/azachar/screenshoter-report-analyzer)
[![devDependency Status](https://david-dm.org/azachar/screenshoter-report-analyzer/dev-status.svg)](https://david-dm.org/azachar/screenshoter-report-analyzer#info=devDependencies)

[![Build Status](https://travis-ci.org/azachar/screenshoter-report-analyzer.svg?branch=master)](https://travis-ci.org/azachar/screenshoter-report-analyzer)
[![Coverage Status](https://img.shields.io/codecov/c/github/azachar/screenshoter-report-analyzer.svg?style=flat-square)](http://codecov.io/github/azachar/screenshoter-report-analyzer?branch=master)

# screenshoter-report-analyzer

A tiny beautiful angular based analytics tool to visually represents protractor tests results from
https://github.com/azachar/protractor-screenshoter-plugin

### Screenshots
##### Reporter Controls
![Screenshoter reporter controlls](screenshots/screenshot1.png)

#####  Expanded Spec
![Screenshoter reporter spec](screenshots/screenshot2.png)

#####  Console log management
![Screenshoter reporter console](screenshots/screenshot3.png)

#####  Stacktrace filtering
![Screenshoter reporter console](screenshots/screenshot5.png)

Instead of

![Screenshoter reporter console](screenshots/screenshot5b.png)

## Development

#### To run the app

``gulp serve``

It comes autimatically with seed data located in ``e2e/seed``

#### To launch tests

``gulp test``  (Unit tests)

``gulp protractor`` (E2E tests)

To pause protractor at the place of e2e test failure, set the environmental variable TEST_DEBUG as follow prior the execution of gulp 

``export TEST_DEBUG=true``

#### To make a build

``gulp build``
