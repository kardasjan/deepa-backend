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
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user2.default.find().exec().then(function (items) {
              function _ref2(_id2) {
                if (!(Array.isArray(_id2) && _id2.every(function (item) {
                  return item instanceof _user2.default;
                }))) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nModel[]\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
              }

              if (!(Array.isArray(items) && items.every(function (item) {
                return item instanceof _user2.default;
              }))) {
                throw new TypeError('Value of argument "items" violates contract.\n\nExpected:\nModel[]\n\nGot:\n' + _inspect(items));
              }

              if (items === null) throw new _commonErrors2.default.NotFoundError();
              return _ref2(items);
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAll() {
    return _ref10.apply(this, arguments);
  };
}();

var newFromObject = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(item) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (item instanceof Object) {
              _context2.next = 2;
              break;
            }

            throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(item));

          case 2:
            _context2.next = 4;
            return new _user2.default(item).save();

          case 4:
            return _context2.abrupt('return', _context2.sent);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function newFromObject(_x) {
    return _ref11.apply(this, arguments);
  };
}();

var deleteById = function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (typeof id === 'string') {
              _context3.next = 2;
              break;
            }

            throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));

          case 2:
            _context3.next = 4;
            return _user2.default.findByIdAndRemove(id).exec().then(function (item) {
              if (!(item instanceof _user2.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              if (item === null) throw new _commonErrors2.default.NotFoundError();
              return item;
            });

          case 4:
            return _context3.abrupt('return', _context3.sent);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function deleteById(_x2) {
    return _ref12.apply(this, arguments);
  };
}();

var updateById = function () {
  var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id, values) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (typeof id === 'string') {
              _context4.next = 2;
              break;
            }

            throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));

          case 2:
            if (values instanceof Object) {
              _context4.next = 4;
              break;
            }

            throw new TypeError('Value of argument "values" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(values));

          case 4:
            _context4.next = 6;
            return _user2.default.findOneAndUpdate({ id: id }, { $set: values }, { new: true }).exec().then(function (item) {
              if (!(item instanceof _user2.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              if (item === null) throw new _commonErrors2.default.NotFoundError();
              return item;
            });

          case 6:
            return _context4.abrupt('return', _context4.sent);

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateById(_x3, _x4) {
    return _ref13.apply(this, arguments);
  };
}();

var getById = function () {
  var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (typeof id === 'string') {
              _context5.next = 2;
              break;
            }

            throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));

          case 2:
            _context5.next = 4;
            return _user2.default.findById(id).exec().then(function (item) {
              if (!(item instanceof _user2.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              if (item === null) throw new _commonErrors2.default.NotFoundError();
              return item;
            });

          case 4:
            return _context5.abrupt('return', _context5.sent);

          case 5:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getById(_x5) {
    return _ref14.apply(this, arguments);
  };
}();

var _user = require('../model/user');

var _user2 = _interopRequireDefault(_user);

var _commonErrors = require('../services/ErrorService/commonErrors');

var _commonErrors2 = _interopRequireDefault(_commonErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAll: getAll,
  newFromObject: newFromObject,
  deleteById: deleteById,
  updateById: updateById,
  getById: getById
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