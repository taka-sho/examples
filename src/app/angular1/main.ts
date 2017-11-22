/// <reference path="../ud.d.ts" />
import '@uirouter/angularjs'
import * as angular from 'angular'
import About from './controllers/about'
import Top from './controllers/top'

namespace app {
  const _ud = userdive()
  const main = angular.module('myapp', ['ui.router'])

  main.config([
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
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
    }
  ])

  main.controller('sample1Controller', Sample1)
  main.controller('sample2Controller', Sample2)
  main.controller('create', ['$scope', ($scope) => {
    $scope.$on('viewContentLoaded', (e) => {
      _ud('create', 'ldq9gyyd', 'auto')
    })
  }])

  main.run([
    '$rootScope',
    '$state',
    '$location',
    ($rootScope, $state, $location) => {
      $rootScope.$on(
        '$stateChangeSuccess',
        (e, toState, toParams, fromState, fromParams) => {
          ud('changeVirtualUrl', $location.absUrl())
        }
      )
    }
  ])
}
