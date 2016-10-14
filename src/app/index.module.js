/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './abstract/main.controller';
import { ExpectationComponent } from '../app/components/expectation/expectation.component';
import { SpecComponent } from '../app/components/spec/spec.component';
import { SpecLogsComponent } from '../app/components/spec/logs/spec-logs.component';
import { LogsComponent } from '../app/components/logs/logs.component';
import { LogComponent } from '../app/components/log/log.component';
import { ScreenshotComponent } from '../app/components/screenshot/screenshot.component';
// import { data } from '../app/components/dev/data.mock';
angular.module('reporter', ['ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ngStorage', 'angularUtils.directives.dirPagination', 'angular.filter'])
  .constant('moment', moment)
  // .constant('data', data)

  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .component('spec', SpecComponent)
  .component('expectations', ExpectationComponent)
  .component('log', LogComponent)
  .component('logs', LogsComponent)
  .component('speclogs', SpecLogsComponent)
  .component('screenshots', ScreenshotComponent)

  .controller('MainController', MainController)
  ;
