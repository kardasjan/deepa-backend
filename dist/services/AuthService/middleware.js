'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthorized = exports.authorize = undefined;

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

var authorize = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _this = this;

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
            _context2.next = 6;
            return _user2.default.findOne({ username: req.body.username }).exec().then(function () {
              var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(user) {
                var _ref2;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _ref2 = function _ref2(_id2) {
                          if (!(_id2 instanceof Object)) {
                            throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                          }

                          return _id2;
                        };

                        if (user instanceof _user2.default || user == null) {
                          _context.next = 3;
                          break;
                        }

                        throw new TypeError('Value of argument "user" violates contract.\n\nExpected:\nUser | null\n\nGot:\n' + _inspect(user));

                      case 3:
                        if (!(user === null || user.password !== req.body.password)) {
                          _context.next = 7;
                          break;
                        }

                        return _context.abrupt('return', _ref2(_api2.default.sendFailed(401, ['Bad username or password!'], {}, res)));

                      case 7:
                        _context.t0 = _ref2;
                        _context.next = 10;
                        return _controller2.default.createToken(user).then(function (token) {
                          function _ref3(_id3) {
                            if (!(_id3 instanceof Object)) {
                              throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
                            }

                            return _id3;
                          }

                          if (!(typeof token === 'string')) {
                            throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(token));
                          }

                          return _ref3(_api2.default.sendSuccess({ token: token, user: user }, res));
                        });

                      case 10:
                        _context.t1 = _context.sent;
                        return _context.abrupt('return', (0, _context.t0)(_context.t1));

                      case 12:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x3) {
                return _ref9.apply(this, arguments);
              };
            }()).catch(function (err) {
              function _ref4(_id4) {
                if (!(_id4 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
                }

                return _id4;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              return _ref4(_api2.default.sendFailed(400, [err.message], {}, res));
            });

          case 6:
            return _context2.abrupt('return', _context2.sent);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function authorize(_x, _x2) {
    return _ref8.apply(this, arguments);
  };
}(); /**
      * Authorization middleware
      * JWT Tokens
      */


var isAuthorized = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
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
            if (req.headers.token) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt('return', _api2.default.sendFailed(403, ['There is no token!'], {}, res));

          case 8:
            _context3.next = 10;
            return _controller2.default.checkTokenValidity(req.headers.token).then(function (decoded) {
              function _ref6(_id6) {
                if (!(_id6 == null)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nvoid\n\nGot:\n' + _inspect(_id6));
                }

                return _id6;
              }

              if (!(decoded instanceof Object)) {
                throw new TypeError('Value of argument "decoded" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(decoded));
              }

              req.decoded = decoded;
              return _ref6(next());
            }).catch(function (err) {
              function _ref7(_id7) {
                if (!(_id7 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
                }

                return _id7;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              return _ref7(_api2.default.sendFailed(401, [err.message], {}, res));
            });

          case 10:
            return _context3.abrupt('return', _context3.sent);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function isAuthorized(_x4, _x5, _x6) {
    return _ref10.apply(this, arguments);
  };
}();

var _user = require('../../model/user');

var _user2 = _interopRequireDefault(_user);

var _api = require('../ApiService/api');

var _api2 = _interopRequireDefault(_api);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.authorize = authorize;
exports.isAuthorized = isAuthorized;

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