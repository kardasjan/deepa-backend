'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemSchema = exports.idSchema = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSchema = exports.idSchema = _joi2.default.object().keys({
  id: _joi2.default.string().required()
});

var itemSchema = exports.itemSchema = _joi2.default.object().keys({
  item: _joi2.default.object().required()
});