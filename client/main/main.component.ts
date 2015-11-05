// TODO figure out how to get rid of the TypeScript compiler error here.
// .jade files are handled by the jade-loader through webpack, right?
import * as template from './main.jade';

export class MainComponent {
  public static selector: string = 'main';
  public static template = template;

  constructor() {
  }
};
