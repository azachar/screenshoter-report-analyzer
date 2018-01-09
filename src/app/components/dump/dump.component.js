class DumpController {
  constructor($scope, $log) {
    'ngInject';

    this.$onInit = () => {
      $scope.$watch(() => this.spec.filtering.showDumps, (value) => {
        this.showDump = value;
        $log.debug('showDump = ', value);
      });
    };
  }
}


export let DumpComponent = {
  templateUrl: 'app/components/dump/dump.html',
  bindings: {
    model: '<'
  },
  controller: DumpController,
  require: {
    spec: '^spec'
  }
};
