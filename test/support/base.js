import Bluebird from 'bluebird';
import sinon from 'sinon';
import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiSinon from 'sinon-chai';
import sinonAsPromised from 'sinon-as-promised';

process.env.NODE_ENV = 'test';

sinonAsPromised(Bluebird);
chai.use(chaiAsPromised);
chai.use(chaiSinon);
chai.should();

// Expose all modules to node.js modules
global.Promise = Bluebird;
global.sinon = sinon;
global.chai = chai;
global.expect = expect;
