export const appModuleName: string = 'augury';

// Global dependencies
export const appModuleVendorDependencies: string[] = [
  'ui.router'
];

export function registerModule (moduleName: string, deps?: string[]) : ng.IModule {
  angular.module(moduleName, deps || []);
  angular.module(appModuleName).requires.push(moduleName);
  return angular.module(moduleName);
};
