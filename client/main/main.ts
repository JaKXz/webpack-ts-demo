import {makeDirective, makeSelector} from '../utils/component-maker';
import MainComponent from './main.component';
import MainRoutes from './main.routes';
import registerModule from '../config';

registerModule('augury.main')
  .config(MainRoutes)
  .directive(makeSelector(MainComponent), makeDirective(MainComponent));
