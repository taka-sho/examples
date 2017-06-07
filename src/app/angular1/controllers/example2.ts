export default class Example2 {
  public static $inject = ['$scope', '$state']
  public title: string = ''
  constructor (protected $scope: ng.IScope, private $state: angular.ui.IStateService) {
    this.title = 'Example1'
  }
}
