class SpecLogsController {
  constructor($scope) {
    'ngInject';
    this.$onInit = () => {
      $scope.$watch(() => this.spec.filtering.showLogs, (value) => {
        this.showLogs = value;
      });
      $scope.$watch(() => this.spec.filtering.logFilter, (value) => {
        this.filter = value;
      });
    }
  }
}


export let SpecLogsComponent = {
  bindings: {
    model: '<'
  },
  require: {
    spec: '^^spec'
  },
  templateUrl: 'app/components/spec/logs/spec-logs.html',
  controller: SpecLogsController
};
