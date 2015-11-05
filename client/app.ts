import 'angular';
import 'angular-ui-router';

import * as appConfig from './config';

angular.module(appConfig.appModuleName, appConfig.appModuleVendorDependencies)
  .config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  });

angular.element(document)
  .ready(() => angular.bootstrap(document, [appConfig.appModuleName]));

import './main/main';
