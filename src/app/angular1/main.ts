import * as angular from 'angular'
import '@uirouter/angularjs'
import Top from './controllers/top'
import About from './controllers/about'
import Userdive from 'userdive'

namespace app {
  const _ud = Userdive()
  const main = angular.module('myapp', ['ui.router'])

  main.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('top', {
      url: '/',
      templateUrl: 'top.html',
      controller: 'topController',
      controllerAs: 'c'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
      controller: 'aboutController',
      controllerAs: 'c'
    })
  }])

  main.controller('topController', Top)
  main.controller('aboutController', About)

  main.run(['$rootScope', '$state', '$location', ($rootScope, $state, $location) => {
    $rootScope.$on('$stateChangeSuccess', (e, toState, toParams, fromState, fromParams) => {
      _ud('send','pageview', $location.absUrl())
    })
  }])
}
