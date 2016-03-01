import Inject from '../utils/di';
import MainComponent from './main.component';

export default class MainRoutes {
  public $stateProvider: angular.ui.IStateProvider;
  public $urlRouterProvider: angular.ui.IUrlRouterProvider;

  constructor(
    @Inject('$stateProvider') $stateProvider,
    @Inject('$urlRouterProvider') $urlRouterProvider
  ) {
      $stateProvider
        .state('main', {
          url: '/',
          controllerAs: 'main',
          controller: MainComponent
        });
    }
}
