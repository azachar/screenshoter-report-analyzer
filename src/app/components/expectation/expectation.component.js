class ExpectationController {
  constructor($scope, $log) {
    'ngInject';

    this.highlight = 'spec';
    this.exclude = 'node_modules';

    this.$onInit = () => {

      $scope.$watch(() => this.spec.filtering.showStack, (value) => {
        this.showStack = value;
        $log.debug('showStack = ', value);
      });

      this.setup($scope, $log);
    };
  }

  setup($scope, $log) {
    if (this.failed()) {
      $scope.$watch(() => this.spec.showFailed, (value) => {
        this.show = value;
        $log.debug('showFailed = ', value);
      });
    }

    if (this.passed()) {
      $scope.$watch(() => this.spec.showPassed, (value) => {
        this.show = value;
        $log.debug('showPassed = ', value);
      });
    }
  }

  filterStackTraces(traces) {
    if (!traces) return;
    if (!this.exclude) return traces;

    var lines = traces.split('\n');
    var filtered = [];
    for (var i = 1; i < lines.length; i++) {
      if (lines[i].indexOf(this.exclude) === -1) {
        filtered.push(lines[i]);
      }
    }
    return filtered.join('\n');
  }

  failed() {
    return this.type === 'failed';
  }

  passed() {
    return this.type === 'passed';
  }

}


export let ExpectationComponent = {
  templateUrl: 'app/components/expectation/expectation.html',
  bindings: {
    model: '<',
    type: '@'
  },
  controller: ExpectationController,
  require: {
    spec: '^spec'
  }
};
