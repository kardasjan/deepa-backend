'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchema = exports.newSchema = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newSchema = exports.newSchema = _joi2.default.object().keys({
  site: _joi2.default.object().required()
});

var getSchema = exports.getSchema = _joi2.default.object().keys({
  filter: _joi2.default.object()
}).unknown(true);