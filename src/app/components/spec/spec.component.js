class SpecController {
  constructor($scope, $log) {
    'ngInject';
    this.$onInit = () => {
      $scope.$watch(() => this.filtering.expand, (value) => {
        this.expand = value;
      });
      $scope.$watch(() => this.filtering.expand, (value) => {
        this.expand = value;
      });
      $scope.$watch(() => this.filtering.showFailed, (value) => {
        this.showFailed = value;
        $log.debug('showFailed = ', value);
      });

      $scope.$watch(() => this.filtering.showPassed, (value) => {
        this.showPassed = value;
        $log.debug('showPassed = ', value);
      });
    }
  }
}


export let SpecComponent = {
  templateUrl: 'app/components/spec/spec.html',
  bindings: {
    test: '<',
    filtering: '<'
  },
  controller: SpecController
}
