'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newSite = exports.getSite = exports.getAll = undefined;

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

var getAll = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var filter;
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
            filter = req.headers.filter ? JSON.parse(req.headers.filter) : {};
            _context.next = 7;
            return _sites2.default.getAll(filter).then(function (sites) {
              function _ref2(_id2) {
                if (!(_id2 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
              }

              if (!(Array.isArray(sites) && sites.every(function (item) {
                return item instanceof _site2.default;
              }))) {
                throw new TypeError('Value of argument "sites" violates contract.\n\nExpected:\nSite[]\n\nGot:\n' + _inspect(sites));
              }

              return _ref2(_api2.default.sendSuccess(sites, res));
            }).catch(function (err) {
              function _ref3(_id3) {
                if (!(_id3 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
                }

                return _id3;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              if (err.name === 'SitesNotFound') return _ref3(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref3(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 7:
            return _context.abrupt('return', _context.sent);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAll(_x, _x2) {
    return _ref10.apply(this, arguments);
  };
}();

var getSite = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var filter;
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
            filter = req.headers.filter ? JSON.parse(req.headers.filter) : {};
            _context2.next = 7;
            return _sites2.default.getOne(filter).then(function (site) {
              function _ref5(_id5) {
                if (!(_id5 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
              }

              if (!(site instanceof _site2.default)) {
                throw new TypeError('Value of argument "site" violates contract.\n\nExpected:\nSite\n\nGot:\n' + _inspect(site));
              }

              return _ref5(_api2.default.sendSuccess(site, res));
            }).catch(function (err) {
              function _ref6(_id6) {
                if (!(_id6 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id6));
                }

                return _id6;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              if (err.name === 'SiteNotFound') return _ref6(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref6(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 7:
            return _context2.abrupt('return', _context2.sent);

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getSite(_x3, _x4) {
    return _ref11.apply(this, arguments);
  };
}();

var newSite = function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var _ref7;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref7 = function _ref7(_id7) {
              if (!(_id7 instanceof Object)) {
                throw new TypeError('Function "newSite" return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
              }

              return _id7;
            };

            if (req instanceof Object) {
              _context3.next = 3;
              break;
            }

            throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));

          case 3:
            if (res instanceof Object) {
              _context3.next = 5;
              break;
            }

            throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));

          case 5:
            _context3.t0 = _ref7;
            _context3.next = 8;
            return _sites2.default.addSite(req.body.site).then(function (site) {
              function _ref8(_id8) {
                if (!(_id8 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id8));
                }

                return _id8;
              }

              if (!(site instanceof _site2.default)) {
                throw new TypeError('Value of argument "site" violates contract.\n\nExpected:\nSite\n\nGot:\n' + _inspect(site));
              }

              return _ref8(_api2.default.sendSuccess(site, res));
            }).catch(function (err) {
              function _ref9(_id9) {
                if (!(_id9 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id9));
                }

                return _id9;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              if (err.name === 'ValidationError') return _ref9(_api2.default.badMongooseValidationResponse(err, res));
              return _ref9(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 8:
            _context3.t1 = _context3.sent;
            return _context3.abrupt('return', (0, _context3.t0)(_context3.t1));

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function newSite(_x5, _x6) {
    return _ref12.apply(this, arguments);
  };
}();

var _api = require('../services/ApiService/api');

var _api2 = _interopRequireDefault(_api);

var _sites = require('../controllers/sites');

var _sites2 = _interopRequireDefault(_sites);

var _site = require('../model/site');

var _site2 = _interopRequireDefault(_site);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getAll = getAll;
exports.getSite = getSite;
exports.newSite = newSite;

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