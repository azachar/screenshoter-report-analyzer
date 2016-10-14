export class MainController {
  constructor(data, $sessionStorage) {
    'ngInject';
    this.data = data;
    this.addParentReferences(this.data.tests);
    this.storage = $sessionStorage;

    this.storage.$default({
      filtering: this.getDefaultConfiguration()
    });

    this.filtering = this.storage.filtering;

  }

  addParentReferences(tests) {
    for (let test of tests) {
      for (let exp of test.failedExpectations) {
        for (let browserAndLogs of exp.logs) {
          browserAndLogs.test = test;
          browserAndLogs.exp = exp;
        }
      }
      for (let exp of test.passedExpectations) {
        for (let browserAndLogs of exp.logs) {
          browserAndLogs.test = test;
          browserAndLogs.exp = exp;
        }
      }
    }
  }


  getDefaultConfiguration() {
    return {
      expand: true,
      showPassed: true,
      showFailed: true,
      showStack: false,
      showLogs: true,
      showSpecScreenshots: false,
      showScreenshots: false,
      perPage: 30,
      excludeList: [],
      logFilter: 'severe'
    };
  }

  reset() {
    this.storage.$reset({
      filtering: this.getDefaultConfiguration()
    });
    this.filtering = this.storage.filtering;
  }

}
