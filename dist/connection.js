'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _env = require('./env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use native promises
_mongoose2.default.Promise = global.Promise;

var mongo_url = _config2.default.MONGO_URL;

if ((0, _env.getEnv)() === _env.EnvTest) {
  mongo_url = _config2.default.MONGO_TEST_URL;
}

console.info("DB:", mongo_url); // eslint-disable-line

global.db = _mongoose2.default.createConnection(mongo_url);

exports.default = global.db;