export function makeDirective (component) {
  return () => {
    let ddo = {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: true,
      controller: component
    };

    if (component.template && component.templateUrl) {
      throw new Error(`${component.selector} cannot have a templateUrl AND an inline template.`);
    } else if (component.template) {
      angular.extend(ddo, {
        template: component.template
      });
    } else if (component.templateUrl) {
      angular.extend(ddo, {
        templateUrl: component.templateUrl
      });
    }

    return angular.extend(ddo, component.options);
  };
}

export function makeSelector (component) {
  console.log(component);
  return component.selector.replace(/-([a-z])/g, s => s[1].toUpperCase());
}
