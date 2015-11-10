import 'angular';
import 'angular-ui-router';

import {appModuleName, appModuleVendorDependencies} from './config';

// Instantiate and bootstrap AuguryCore App
angular
  .module(appModuleName, appModuleVendorDependencies)
  .config(($locationProvider) => $locationProvider.html5Mode(true));
angular
  .element(document)
  .ready(() => angular.bootstrap(document, [appModuleName]));

// Apparently, imports are supposed to be hoisted, so the following statements
// just register the rest of the modules by invoking the declaration file
// may break at some point - TODO figure out a better way to do this.
import './main/main';
