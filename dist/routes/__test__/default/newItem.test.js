'use strict';

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

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _mock = require('../../../services/MockService/mock');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Chai settings
_chai2.default.use(_chaiHttp2.default);
var expect = _chai2.default.expect; // eslint-disable-line
var should = _chai2.default.should(); // eslint-disable-line

// Local test settings
var ROUTE_URL = '/default/';

// Define variables for all tests
var mock = void 0;
var jwt = void 0;

// Define local mock objects
var validItem = {
  name: 'Whatever',
  value: 12,
  active: false
};

var invalidItem = {
  name: 12,
  value: 'Whatever'
};

describe('Example: newItem', function () {
  before((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mock = new _mock2.default();
            _context.next = 3;
            return mock.mockDefault();

          case 3:
            _context.next = 5;
            return mock.getJwt().then(function (token) {
              if (!(typeof token === 'string')) {
                throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(token));
              }

              jwt = token;
            });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  describe('Should pass', function () {
    it('Create', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _chai2.default.request(_config2.default.PROJECT_URL).post(ROUTE_URL).set('token', jwt).send({ item: validItem }).then(function (res) {
                if (!(res instanceof Object)) {
                  throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
                }

                res.should.have.status(200);
                res.body.data.name.should.eq(validItem.name);
                res.body.data.value.should.eq(validItem.value);
                res.body.data.active.should.eq(validItem.active);
              });

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })));
  });

  describe('Should not pass', function () {
    it('Create failed', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _chai2.default.request(_config2.default.PROJECT_URL).post(ROUTE_URL).set('token', jwt).send({ item: invalidItem }).catch(function (err) {
                if (!(err instanceof Error)) {
                  throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
                }

                err.response.should.have.status(400);
              });

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    })));
  });
});

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