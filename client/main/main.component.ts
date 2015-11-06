export default class MainComponent {
  public static selector: string = 'main';
  public static template = require('./main.jade');
  private greeting: string;

  constructor() {
    this.greeting = 'Jason';
  }
};
