class LogsController {
  constructor($scope, $log, $filter) {
    'ngInject';
    this.$log = $log;
    this.$filter = $filter;
    this.$onInit = () => {
      $scope.$watch(() => this.model ? this.model.length : 0, (value) => {
        // this.$log.debug('Processing tests' + this.model.length);
        if (value) {
          this.logs = this.getLogs(this.model);
        }
      });
    }

  }

  getLogs(tests) {
      let result = [];
      for (let test of tests) {
        for (let exp of test.failedExpectations) {
          result.push(...exp.logs);
        }
        for (let exp of test.passedExpectations) {
          result.push(...exp.logs);
        }
      }
      return result;
    }
    //some log messages contains as a message object

  getColor(log) {
    switch (log.level.toUpperCase()) {
      case 'INFO':
        return 'list-group-item-info';
      case 'WARNING':
        return 'list-group-item-warning';
      case 'SEVERE':
      case 'ERROR':
        return 'list-group-item-danger';
      case 'DEBUG':
      default:
        return '';
    }
  }

  omit() {
    // debugger;
    var self = this;

    function extract(log) {
      try {
        let obj = angular.fromJson(log.message);
        let newLog = obj.message;
        if (newLog) {
          newLog.message = newLog.text;
          return newLog;
        }
      } catch (ex) {
        // this.$log.debug(ex);
        return log;
      }
    }
    return function(log) {
      if (self.filtering.exclude) {
        let array = self.$filter('filter')([log], self.filtering.exclude);
        // /*eslint-disable no-debugger*/
        // debugger;
        //contains exclude term
        if (array.length > 0) {
          return true;
        }
      }
      for (var excludedLog of self.filtering.excludeList) {
        if (log.message == excludedLog.message) {
          return true;
        }
        if (extract(log).message == excludedLog.message) {
          return true;
        }
      }
      return false;
    }
  }

}


export let LogsComponent = {
  bindings: {
    model: '<',
    filtering: '='
  },
  templateUrl: 'app/components/logs/logs.html',
  controller: LogsController
};
