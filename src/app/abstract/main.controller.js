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
    if (tests) {
      for (let i = 0; i < tests.length; i++) {
        let test = tests[i];
        if (test.failedExpectations) {
          for (let j = 0; j < test.failedExpectations.length; j++) {
            let exp = test.failedExpectations[j];
            if (exp.logs) {
              for (let k = 0; k < exp.logs.length; k++) {
                let browserAndLogs = exp.logs[k];
                browserAndLogs.test = test;
                browserAndLogs.exp = exp;
              }
            }
          }
        }
        if (test.passedExpectations) {
          for (let j = 0; j < test.passedExpectations.length; j++) {
            let exp = test.passedExpectations[j];
            if (exp.logs) {
              for (let k = 0; k < exp.logs.length; k++) {
                let browserAndLogs = exp.logs[k];
                browserAndLogs.test = test;
                browserAndLogs.exp = exp;
              }
            }
          }
        }
      }
    }
    return tests;
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
