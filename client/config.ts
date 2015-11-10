export const appModuleName: string = 'AuguryCore';

// Global dependencies
export const appModuleVendorDependencies: string[] = [
  'ui.router'
];

function registerModule (moduleName: string, deps?: string[]) : ng.IModule {
  angular.module(moduleName, deps || []);
  angular.module(appModuleName).requires.push(moduleName);
  return angular.module(moduleName);
};

export default registerModule;
