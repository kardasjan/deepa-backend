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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var newValidation = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req instanceof Object) {
              _context.next = 2;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 2:
            if (res instanceof Object) {
              _context.next = 4;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 4:
            if (typeof next === 'function') {
              _context.next = 6;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 6:
            result = _joi2.default.validate(req.body, _example.itemSchema);

            if (!(result.error !== null)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 9:
            return _context.abrupt('return', next());

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function newValidation(_x, _x2, _x3) {
    return _ref7.apply(this, arguments);
  };
}();

var editValidation = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req instanceof Object) {
              _context2.next = 2;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 2:
            if (res instanceof Object) {
              _context2.next = 4;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 4:
            if (typeof next === 'function') {
              _context2.next = 6;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 6:
            result = _joi2.default.validate(req.parameters, _example.idSchema);

            if (!(result.error !== null)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 9:

            result = _joi2.default.validate(req.body, _example.itemSchema);

            if (!(result.error !== null)) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 12:
            return _context2.abrupt('return', next());

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function editValidation(_x4, _x5, _x6) {
    return _ref8.apply(this, arguments);
  };
}();

var deleteValidation = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (req instanceof Object) {
              _context3.next = 2;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 2:
            if (res instanceof Object) {
              _context3.next = 4;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 4:
            if (typeof next === 'function') {
              _context3.next = 6;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 6:
            result = _joi2.default.validate(req.parameters, _example.idSchema);

            if (!(result.error !== null)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 9:
            return _context3.abrupt('return', next());

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function deleteValidation(_x7, _x8, _x9) {
    return _ref9.apply(this, arguments);
  };
}();

var getValidation = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (req instanceof Object) {
              _context4.next = 2;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 2:
            if (res instanceof Object) {
              _context4.next = 4;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 4:
            if (typeof next === 'function') {
              _context4.next = 6;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 6:
            result = _joi2.default.validate(req.parameters, _example.idSchema);

            if (!(result.error !== null)) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 9:
            return _context4.abrupt('return', next());

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getValidation(_x10, _x11, _x12) {
    return _ref10.apply(this, arguments);
  };
}();

var getAllValidation = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (req instanceof Object) {
              _context5.next = 2;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 2:
            if (res instanceof Object) {
              _context5.next = 4;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 4:
            if (typeof next === 'function') {
              _context5.next = 6;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 6:
            result = _joi2.default.validate(req.headers, _example.filterSchema);

            if (!(result.error !== null)) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 9:
            return _context5.abrupt('return', next());

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getAllValidation(_x13, _x14, _x15) {
    return _ref11.apply(this, arguments);
  };
}();

var getByParamValidation = function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res, next) {
    var result;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (req instanceof Object) {
              _context6.next = 2;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 2:
            if (res instanceof Object) {
              _context6.next = 4;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 4:
            if (typeof next === 'function') {
              _context6.next = 6;
              break;
            }

            throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));

          case 6:
            result = _joi2.default.validate(req.headers, _example.filterSchema);

            if (!(result.error !== null)) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt('return', _api2.default.badJoiValidationResponse(result.error, res));

          case 9:
            return _context6.abrupt('return', next());

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getByParamValidation(_x16, _x17, _x18) {
    return _ref12.apply(this, arguments);
  };
}();

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _api = require('../../services/ApiService/api');

var _api2 = _interopRequireDefault(_api);

var _example = require('./schema/example');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  newValidation: newValidation,
  editValidation: editValidation,
  deleteValidation: deleteValidation,
  getValidation: getValidation,
  getAllValidation: getAllValidation,
  getByParamValidation: getByParamValidation
};

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