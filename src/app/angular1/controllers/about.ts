export default class About {
  public static $inject = ['$scope', '$state']
  public title: string = ''
  constructor (protected $scope: ng.IScope, private $state: angular.ui.IStateService) {
    this.title = 'Top'
  }
}
