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

var getAll = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (filter instanceof Object) {
              _context.next = 2;
              break;
            }

            throw new TypeError('Value of argument "filter" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(filter));

          case 2:
            _context.next = 4;
            return _site2.default.find(filter).exec().then(function (sites) {
              function _ref2(_id2) {
                if (!(Array.isArray(_id2) && _id2.every(function (item) {
                  return item instanceof _site2.default;
                }))) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nSite[]\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
              }

              if (!(Array.isArray(sites) && sites.every(function (item) {
                return item instanceof _site2.default;
              }))) {
                throw new TypeError('Value of argument "sites" violates contract.\n\nExpected:\nSite[]\n\nGot:\n' + _inspect(sites));
              }

              if (sites === null) {
                throw new _sites.SitesNotFoundError();
              }
              return _ref2(sites);
            });

          case 4:
            return _context.abrupt('return', _context.sent);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAll() {
    return _ref6.apply(this, arguments);
  };
}();

var getOne = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (filter instanceof Object) {
              _context2.next = 2;
              break;
            }

            throw new TypeError('Value of argument "filter" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(filter));

          case 2:
            _context2.next = 4;
            return _site2.default.findOne(filter).exec().then(function (site) {
              if (!(site instanceof _site2.default)) {
                throw new TypeError('Value of argument "site" violates contract.\n\nExpected:\nSite\n\nGot:\n' + _inspect(site));
              }

              if (site === null) {
                throw new _sites.SiteNotFoundError();
              }
              return site;
            });

          case 4:
            return _context2.abrupt('return', _context2.sent);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getOne() {
    return _ref7.apply(this, arguments);
  };
}();

var addSite = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(site) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (site instanceof Object) {
              _context3.next = 2;
              break;
            }

            throw new TypeError('Value of argument "site" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(site));

          case 2:
            _context3.next = 4;
            return new _site2.default(site).save();

          case 4:
            return _context3.abrupt('return', _context3.sent);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addSite(_x3) {
    return _ref8.apply(this, arguments);
  };
}();

var _site = require('../model/site');

var _site2 = _interopRequireDefault(_site);

var _sites = require('../services/ErrorService/sites');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAll: getAll,
  getOne: getOne,
  addSite: addSite
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