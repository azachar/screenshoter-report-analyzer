describe('component: logs', () => {
  beforeEach(angular.mock.module('reporter'));

  var $componentController;
  beforeEach(inject(_$componentController_ => {
    $componentController = _$componentController_;
  }));

  describe('$ctrl', () => {
    var bindings;
    var ctrl;
    beforeEach(() => {
      bindings = {
        model: {},
        filtering: {}
      };
      ctrl = $componentController('logs', null, bindings);
    });

    describe('getColor', () => {
      it('should handle undefined log', () => {
        expect(ctrl.getColor(undefined)).toBe('');
      });

      it('should handle empty log', () => {
        expect(ctrl.getColor({})).toBe('');
      });

      it('should handle getColor', () => {
        expect(ctrl.getColor({
          level: 'info'
        })).toBe('list-group-item-info');
      });
    });

    describe('getLogs', () => {
      it('should handle undefined tests', () => {
        expect(ctrl.getLogs(undefined)).toEqual(jasmine.any(Array));
      });

      it('should handle missing failedExpectations', () => {
        expect(ctrl.getLogs([{
          passedExpectations: []
        }])).toEqual(jasmine.any(Array));
      });

      it('should handle missing passedExpectations', () => {
        expect(ctrl.getLogs([{
          failedExpectations: []
        }])).toEqual(jasmine.any(Array));
      });

      it('should handle missing passedExpectations and failedExpectations', () => {
        expect(ctrl.getLogs([{}])).toEqual(jasmine.any(Array));
      });

      it('should handle empty passedExpectations and failedExpectations', () => {
        expect(ctrl.getLogs([{
          failedExpectations: [],
          passedExpectations: []
        }])).toEqual(jasmine.any(Array));
      });

      it('should extract logs', () => {
        expect(ctrl.getLogs([{
          failedExpectations: [{
            logs: ['a', 'b']
          }],
          passedExpectations: [{
            logs: ['c', 'd']
          }]
        }])).toEqual(jasmine.arrayContaining(['a', 'b', 'c', 'd']));
      });


    });

  });

});
