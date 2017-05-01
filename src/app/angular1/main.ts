/// <reference path="../ud.d.ts" />
import * as angular from 'angular'
import 'angular-ui-router'
import Top from './controllers/top'
import About from './controllers/about'

namespace app {
  declare var ud: USERDIVETracker.USERDIVEObject
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
      ud('changeVirtualUrl', $location.absUrl())
    })
  }])
}
