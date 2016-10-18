describe('controller: main', () => {
  beforeEach(angular.mock.module('reporter'));

  var ctrl;
  var $scope;
  beforeEach(inject($controller => {
    $scope = {};
    ctrl = $controller('MainController', {
      $scope: $scope
    });
  }));

  describe('addParentReferences', () => {

    it('should handle undefined tests', () => {
      expect(ctrl.addParentReferences(undefined)).toEqual(undefined);
    });

    it('should handle missing failedExpectations', () => {
      expect(ctrl.addParentReferences([{
        passedExpectations: []
      }])).toEqual(jasmine.any(Array));
    });

    it('should handle missing passedExpectations', () => {
      expect(ctrl.addParentReferences([{
        failedExpectations: []
      }])).toEqual(jasmine.any(Array));
    });

    it('should handle missing passedExpectations and failedExpectations', () => {
      expect(ctrl.addParentReferences([{}])).toEqual(jasmine.any(Array));
    });

    it('should handle empty passedExpectations and failedExpectations', () => {
      expect(ctrl.addParentReferences([{
        failedExpectations: [],
        passedExpectations: []
      }])).toEqual(jasmine.any(Array));
    });

    it('should add to each log parent test and exp', () => {
      let result = ctrl.addParentReferences([{
        failedExpectations: [{
          logs: [{
            browser: 'a',
            logs: ['logA']
          }, {
            browser: 'b',
            logs: ['logB']
          }]
        }],
        passedExpectations: [{
          logs: [{
            browser: 'c',
            logs: ['logC']
          }, {
            browser: 'd',
            logs: ['logD']
          }]
        }]
      }]);
      expect(result[0].failedExpectations[0].logs[0].test).toEqual(jasmine.any(Object));
      expect(result[0].failedExpectations[0].logs[0].exp).toEqual(jasmine.any(Object));

      expect(result[0].passedExpectations[0].logs[0].test).toEqual(jasmine.any(Object));
      expect(result[0].passedExpectations[0].logs[0].exp).toEqual(jasmine.any(Object));
    });
  });

});
