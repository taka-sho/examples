import * as angular from 'angular'
import '@uirouter/angularjs'
import Example1 from './controllers/example1'
import Example2 from './controllers/example2'
import Userdive from 'userdive'

namespace app {
  const _ud = Userdive()
  const main = angular.module('myapp', ['ui.router'])

  main.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/example1')

    $stateProvider
    .state('example1', {
      url: '/example1',
      templateUrl: 'example1.html',
      controller: 'example1Controller',
      controllerAs: 'c'
    })
    .state('example2', {
      url: '/example2',
      templateUrl: 'example2.html',
      controller: 'example2Controller',
      controllerAs: 'c'
    })
  }])

  main.controller('example1Controller', Example1)
  main.controller('example2Controller', Example2)

  main.run(['$rootScope', '$state', '$location', ($rootScope, $state, $location) => {
    $rootScope.$on('$stateChangeSuccess', (e, toState, toParams, fromState, fromParams) => {
      _ud('send','pageview', $location.absUrl())
    })
  }])
}
