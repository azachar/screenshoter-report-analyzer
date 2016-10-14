export function runBlock($log, $rootScope) {
  'ngInject';
  /*eslint-disable */
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    $log.debug('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
    $log.debug('$stateChangeError - fired when an error occurs during transition.');
    $log.debug(arguments);
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $log.debug('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
  });

  $rootScope.$on('$viewContentLoaded', function(event) {
    $log.debug('$viewContentLoaded - fired after dom rendered', event);
  });

  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
    $log.debug('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
    $log.debug(unfoundState, fromState, fromParams);
  });

  /*eslint-enable */

}
