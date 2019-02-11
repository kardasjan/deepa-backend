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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _sites = require('../../controllers/sites');

var _sites2 = _interopRequireDefault(_sites);

var _user = require('../../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _controller = require('../AuthService/controller');

var _controller2 = _interopRequireDefault(_controller);

var _example = require('../../controllers/example');

var _example2 = _interopRequireDefault(_example);

var _site = require('../../model/site');

var _site2 = _interopRequireDefault(_site);

var _user3 = require('../../model/user');

var _user4 = _interopRequireDefault(_user3);

var _example3 = require('../../model/example');

var _example4 = _interopRequireDefault(_example3);

var _siteItems = require('./siteItems');

var _siteItems2 = _interopRequireDefault(_siteItems);

var _userItems = require('./userItems');

var _userItems2 = _interopRequireDefault(_userItems);

var _exampleItems = require('./exampleItems');

var _exampleItems2 = _interopRequireDefault(_exampleItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockService = function () {
  function MockService() {
    (0, _classCallCheck3.default)(this, MockService);
  }

  (0, _createClass3.default)(MockService, [{
    key: 'mockSites',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _site2.default.remove().exec();

              case 2:
                _context.next = 4;
                return _sites2.default.addSite(_siteItems2.default.one);

              case 4:
                _context.next = 6;
                return _sites2.default.addSite(_siteItems2.default.two);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mockSites() {
        return _ref9.apply(this, arguments);
      }

      return mockSites;
    }()
  }, {
    key: 'mockUsers',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user4.default.remove().exec();

              case 2:
                _context2.next = 4;
                return _user2.default.newFromObject(_userItems2.default.one);

              case 4:
                _context2.next = 6;
                return _user2.default.newFromObject(_userItems2.default.two);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function mockUsers() {
        return _ref10.apply(this, arguments);
      }

      return mockUsers;
    }()
  }, {
    key: 'mockExample',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _example4.default.remove().exec();

              case 2:
                _context3.next = 4;
                return _example2.default.newFromObject(_exampleItems2.default.one);

              case 4:
                _context3.next = 6;
                return _example2.default.newFromObject(_exampleItems2.default.two);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function mockExample() {
        return _ref11.apply(this, arguments);
      }

      return mockExample;
    }()
  }, {
    key: 'mockDefault',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.mockUsers();

              case 2:
                _context4.next = 4;
                return this.mockSites();

              case 4:
                _context4.next = 6;
                return this.mockExample();

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function mockDefault() {
        return _ref12.apply(this, arguments);
      }

      return mockDefault;
    }()
  }, {
    key: 'getJwt',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(user) {
        var _ref5;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref5 = function _ref5(_id5) {
                  if (!(typeof _id5 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id5));
                  }

                  return _id5;
                };

                if (user instanceof _user4.default || user == null) {
                  _context5.next = 3;
                  break;
                }

                throw new TypeError('Value of argument "user" violates contract.\n\nExpected:\nUser | null\n\nGot:\n' + _inspect(user));

              case 3:
                if (!user) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt('return', _ref5(_controller2.default.createToken(user)));

              case 5:
                _context5.t0 = _ref5;
                _context5.next = 8;
                return _user2.default.newFromObject(_userItems2.default.jwtUser).then(function (user) {
                  function _ref6(_id6) {
                    if (!(_id6 instanceof _promise2.default)) {
                      throw new TypeError('Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(_id6));
                    }

                    return _id6;
                  }

                  if (!(user instanceof _user4.default)) {
                    throw new TypeError('Value of argument "user" violates contract.\n\nExpected:\nUser\n\nGot:\n' + _inspect(user));
                  }

                  return _ref6(_controller2.default.createToken(user));
                }).then(function (token) {
                  if (!(typeof token === 'string')) {
                    throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(token));
                  }

                  return token;
                });

              case 8:
                _context5.t1 = _context5.sent;
                return _context5.abrupt('return', (0, _context5.t0)(_context5.t1));

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getJwt(_x) {
        return _ref13.apply(this, arguments);
      }

      return getJwt;
    }()
  }, {
    key: 'getExample',
    value: function () {
      var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(filter) {
        var _ref8;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _ref8 = function _ref8(_id8) {
                  if (!(_id8 instanceof _example4.default)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nExample\n\nGot:\n' + _inspect(_id8));
                  }

                  return _id8;
                };

                if (filter instanceof Object || filter == null) {
                  _context6.next = 3;
                  break;
                }

                throw new TypeError('Value of argument "filter" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(filter));

              case 3:
                _context6.t0 = _ref8;
                _context6.next = 6;
                return _example2.default.getByParam(filter);

              case 6:
                _context6.t1 = _context6.sent;
                return _context6.abrupt('return', (0, _context6.t0)(_context6.t1));

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getExample(_x2) {
        return _ref14.apply(this, arguments);
      }

      return getExample;
    }()
  }]);
  return MockService;
}();

exports.default = MockService;

// TODO: Fix tests (NOT FOUND response, it is not correct)

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