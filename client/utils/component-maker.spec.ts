import {makeDirective, makeSelector} from './component-maker';
import {expect} from 'chai';

describe('Component Maker', () => {
  describe('Make directive', () => {
    it('should throw an error when an inline template and templateUrl are specified');

    it('should return an an object with basic properties if options are mangled');
  });

  describe('Make selector', () => {
    it('should return an unmodified one word selector', () => {
      class MainComponentMock {
        public static selector: string = 'main';
      }
      expect(makeSelector(MainComponentMock)).to.equal('main');
    });

    it('should return a camelCased selector for a two-word selector');

    it('should return a valid multipleCamelCased for a three-word or more selector');
  });
});
