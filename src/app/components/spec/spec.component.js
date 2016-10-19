class SpecController {
  constructor($scope) {
    'ngInject';
    this.$onInit = () => {
      $scope.$watch(() => this.filtering.expand, (value) => {
        this.expand = value;
      });

      $scope.$watch(() => this.filtering.showFailed, (value) => {
        this.showFailed = value;
      });

      $scope.$watch(() => this.filtering.showPassed, (value) => {
        this.showPassed = value;
      });

      $scope.$watch(() => this.filtering.showSpecScreenshots, (value) => {
        this.showSpecScreenshots = value;
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
