'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLLECTION = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _connection = require('../connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var COLLECTION = exports.COLLECTION = 'Users';

var schema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
});

exports.default = _connection2.default.model(COLLECTION, schema);