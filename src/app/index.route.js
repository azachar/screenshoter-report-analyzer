export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('app', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'app/abstract/abstract.html',
          controller: 'MainController',
          controllerAs: 'main'
        },
        'menu@app': {
          templateUrl: 'app/abstract/menu.html'
        }
      }
    })
    .state('app.welcome', {
      url: '/welcome',
      views: {
        'jumbotron': {
          templateUrl: 'app/welcome/jumbotron.html'
        },
        'content': {
          templateUrl: 'app/welcome/content.html'
        }
      }
    })
    .state('app.report', {
      abstract: true,
      url: '/report',
      views: {
        'jumbotron@app': {
          templateUrl: 'app/abstract/filtering.html'
        }
      }
    })
    .state('app.report.screenshots', {
      url: '/screenshots',
      views: {
        'subfiltering': {
          templateUrl: 'app/screenshots/subfiltering.html'
        },
        'content@app': {
          templateUrl: 'app/screenshots/content.html'
        }
      }
    })
    .state('app.report.console', {
      url: '/console',
      views: {
        'subfiltering': {
          templateUrl: 'app/console/subfiltering.html'
        },
        'content@app': {
          templateUrl: 'app/console/content.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/welcome');
}
