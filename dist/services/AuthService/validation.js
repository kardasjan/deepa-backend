'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenValidation = exports.authorizeValidation = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var authorizeValidation = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var _ref, result;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = function _ref(_id) {
              if (!(_id instanceof Object)) {
                throw new TypeError('Function "authorizeValidation" return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id));
              }

              return _id;
            };

            if (req instanceof Object) {
              _context.next = 3;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 3:
            if (res instanceof Object) {
              _context.next = 5;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 5:
            if (typeof next === 'function') {
              _context.next = 7;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 7:
            result = _joi2.default.validate(req.body, userSchema);

            if (!(result.error !== null)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', _ref(_api2.default.badJoiValidationResponse(result.error, res)));

          case 10:
            return _context.abrupt('return', next());

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function authorizeValidation(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var tokenValidation = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var _ref2, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2 = function _ref2(_id2) {
              if (!(_id2 instanceof Object)) {
                throw new TypeError('Function "tokenValidation" return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
              }

              return _id2;
            };

            if (req instanceof Object) {
              _context2.next = 3;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 3:
            if (res instanceof Object) {
              _context2.next = 5;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 5:
            if (typeof next === 'function') {
              _context2.next = 7;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 7:
            result = _joi2.default.validate(req.headers, tokenSchema);

            if (!(result.error !== null)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt('return', _ref2(_api2.default.badJoiValidationResponse(result.error, res)));

          case 10:
            return _context2.abrupt('return', next());

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function tokenValidation(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _api = require('../ApiService/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Authorization validation
 * It should be triggered manually by routes
 */
var userSchema = _joi2.default.object().keys({
  username: _joi2.default.string().required(),
  password: _joi2.default.string().required()
});

var tokenSchema = _joi2.default.object().keys({
  token: _joi2.default.string().required()
}).unknown(true);

exports.authorizeValidation = authorizeValidation;
exports.tokenValidation = tokenValidation;

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