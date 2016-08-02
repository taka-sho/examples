/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular'
import 'angular-ui-router'
import Top from './controllers/top'
import About from './controllers/about'
import Tracker from '../ud'

namespace app {
  const tracker = new Tracker()
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

  main.run(['$rootScope', '$state', ($rootScope, $state) => {
    $rootScope.$on('$stateChangeStart', (e, toState, toParams, fromState, fromParams) => {
      tracker.changeVirtualUrl()
    })
  }])
}
