'use strict';

var chai = require('chai');

global.expect = chai.expect;
global.assert = chai.assert;
chai.should();

global.sinon = require('sinon');

chai.use(require('sinon-chai'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));
