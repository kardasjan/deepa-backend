'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mongoose = require('../ErrorService/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _joi = require('../ErrorService/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The reason for existence of this code is structure, every
 * API Response should have data and errors property
 */
var ApiService = function () {
  function ApiService() {
    (0, _classCallCheck3.default)(this, ApiService);
  }

  (0, _createClass3.default)(ApiService, null, [{
    key: 'create',


    /**
     * Creates API Response body
     *
     * @param httpCode
     * @param errors
     * @param data
     * @returns {{httpCode: *, status: *, errors: *, data: *}}
     */
    value: function create(status, errors, data) {
      if (!(typeof status === 'number')) {
        throw new TypeError('Value of argument "status" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(status));
      }

      if (!(Array.isArray(errors) && errors.every(function (item) {
        return typeof item === 'string';
      }) || typeof errors === 'boolean')) {
        throw new TypeError('Value of argument "errors" violates contract.\n\nExpected:\nArray<string> | boolean\n\nGot:\n' + _inspect(errors));
      }

      if (!(data instanceof Object)) {
        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
      }

      return {
        status: status,
        body: {
          errors: errors,
          data: data
        }
      };
    }
  }, {
    key: 'send',
    value: function send(msg, res) {
      function _ref2(_id2) {
        if (!(_id2 instanceof Object)) {
          throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
        }

        return _id2;
      }

      if (!(msg instanceof Object)) {
        throw new TypeError('Value of argument "msg" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(msg));
      }

      if (!(res instanceof Object)) {
        throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
      }

      return _ref2(res.status(msg.status).json(msg.body));
    }
  }, {
    key: 'sendSuccess',
    value: function sendSuccess(data, res) {
      function _ref3(_id3) {
        if (!(_id3 instanceof Object)) {
          throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
        }

        return _id3;
      }

      if (!(data instanceof Object)) {
        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
      }

      if (!(res instanceof Object)) {
        throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
      }

      return _ref3(this.send(this.create(200, false, data), res));
    }
  }, {
    key: 'sendFailed',
    value: function sendFailed(status) {
      var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var res = arguments[3];

      function _ref4(_id4) {
        if (!(_id4 instanceof Object)) {
          throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
        }

        return _id4;
      }

      if (!(typeof status === 'number')) {
        throw new TypeError('Value of argument "status" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(status));
      }

      if (!(Array.isArray(errors) && errors.every(function (item) {
        return typeof item === 'string';
      }))) {
        throw new TypeError('Value of argument "errors" violates contract.\n\nExpected:\nArray<string>\n\nGot:\n' + _inspect(errors));
      }

      if (!(data instanceof Object)) {
        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
      }

      if (!(res instanceof Object)) {
        throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
      }

      return _ref4(this.send(this.create(status, errors, data), res));
    }
  }, {
    key: 'badMongooseValidationResponse',
    value: function badMongooseValidationResponse(err, res) {
      function _ref5(_id5) {
        if (!(_id5 instanceof Object)) {
          throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
        }

        return _id5;
      }

      if (!(err instanceof Error)) {
        throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
      }

      if (!(res instanceof Object)) {
        throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
      }

      var errors = (0, _mongoose2.default)(err);
      return _ref5(this.send(this.create(400, errors, {}), res));
    }
  }, {
    key: 'badJoiValidationResponse',
    value: function badJoiValidationResponse(error, res) {
      function _ref6(_id6) {
        if (!(_id6 instanceof Object)) {
          throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id6));
        }

        return _id6;
      }

      if (!(error instanceof Object)) {
        throw new TypeError('Value of argument "error" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(error));
      }

      if (!(res instanceof Object)) {
        throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
      }

      var errors = (0, _joi2.default)(error);
      return _ref6(this.send(this.create(400, errors, {}), res));
    }
  }]);
  return ApiService;
}();

exports.default = ApiService;

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      if (depth > maxDepth) return '[...]';

      var first = _inspect(input[0], depth);

      if (input.every(function (item) {
        return _inspect(item, depth) === first;
      })) {
        return first.trim() + '[]';
      } else {
        return '[' + input.slice(0, maxKeys).map(function (item) {
          return _inspect(item, depth);
        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
      }
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}