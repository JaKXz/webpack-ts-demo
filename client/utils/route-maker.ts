export function makeRoutes (moduleName, routes) {
  routes.forEach(makeRoute(moduleName));
}

function makeRoute (moduleName) {
  return function (route) {
    angular.module(moduleName)
      .config(['$stateProvider', function ($stateProvider) {
        angular.extend(route.config, {
          controllerAs: 'ctrl',
          templateUrl:
            route.config.controller &&
            route.config.controller.templateUrl ||
            route.config.templateUrl
        });
      }]);
  };
}
