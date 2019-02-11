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

/**
 * Middleware to handle errors from getting all items from desired database
 * @param {Object} req 
 * @param {Object} res 
 */
var getAll = function () {
  var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
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
            _context.next = 6;
            return _example2.default.getAll(req.headers.filter).then(function (items) {
              function _ref2(_id2) {
                if (!(_id2 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
              }

              if (!(Array.isArray(items) && items.every(function (item) {
                return item instanceof _example4.default;
              }))) {
                throw new TypeError('Value of argument "items" violates contract.\n\nExpected:\nModel[]\n\nGot:\n' + _inspect(items));
              }

              return _ref2(_api2.default.sendSuccess(items, res));
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

              if (err.name === 'NotFoundError') return _ref3(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref3(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 6:
            return _context.abrupt('return', _context.sent);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAll(_x, _x2) {
    return _ref19.apply(this, arguments);
  };
}();

var newItem = function () {
  var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
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
            return _example2.default.newFromObject(req.body.item).then(function (item) {
              function _ref5(_id5) {
                if (!(_id5 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
              }

              if (!(item instanceof _example4.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              return _ref5(_api2.default.sendSuccess(item, res));
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

              // Mongoose validation error has the same name as Joi validation error,
              // ensure there is validation before and Joi errors caught outside of
              // this function
              if (err.name === 'ValidationError') return _ref6(_api2.default.badMongooseValidationResponse(err, res));
              return _ref6(_api2.default.sendFailed(500, [err.message], {}, res));
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

  return function newItem(_x3, _x4) {
    return _ref20.apply(this, arguments);
  };
}();

var deleteItem = function () {
  var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id;
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
            id = req.parameters.id;
            _context3.next = 7;
            return _example2.default.deleteById(id).then(function (item) {
              function _ref8(_id8) {
                if (!(_id8 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id8));
                }

                return _id8;
              }

              if (!(item instanceof _example4.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              return _ref8(_api2.default.sendSuccess(item, res));
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

              if (err.name === 'NotFoundError') return _ref9(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref9(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 7:
            return _context3.abrupt('return', _context3.sent);

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function deleteItem(_x5, _x6) {
    return _ref21.apply(this, arguments);
  };
}();

var editItem = function () {
  var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var _req$parameters, id, values;

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
            _req$parameters = req.parameters, id = _req$parameters.id, values = _req$parameters.values;
            _context4.next = 7;
            return _example2.default.updateById(id, values).then(function (item) {
              function _ref11(_id11) {
                if (!(_id11 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id11));
                }

                return _id11;
              }

              if (!(item instanceof _example4.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              return _ref11(_api2.default.sendSuccess(item, res));
            }).catch(function (err) {
              function _ref12(_id12) {
                if (!(_id12 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id12));
                }

                return _id12;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              if (err.name === 'NotFoundError') return _ref12(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref12(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 7:
            return _context4.abrupt('return', _context4.sent);

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function editItem(_x7, _x8) {
    return _ref22.apply(this, arguments);
  };
}();

var getItem = function () {
  var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var id;
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
            id = req.parameters.id;
            _context5.next = 7;
            return _example2.default.deleteById(id).then(function (item) {
              function _ref14(_id14) {
                if (!(_id14 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id14));
                }

                return _id14;
              }

              if (!(item instanceof _example4.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              return _ref14(_api2.default.sendSuccess(item, res));
            }).catch(function (err) {
              function _ref15(_id15) {
                if (!(_id15 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id15));
                }

                return _id15;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              if (err.name === 'NotFoundError') return _ref15(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref15(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 7:
            return _context5.abrupt('return', _context5.sent);

          case 8:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getItem(_x9, _x10) {
    return _ref23.apply(this, arguments);
  };
}();

var getByParam = function () {
  var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
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
            _context6.next = 6;
            return _example2.default.getByParam(req.headers.filter).then(function (item) {
              function _ref17(_id17) {
                if (!(_id17 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id17));
                }

                return _id17;
              }

              if (!(item instanceof _example4.default)) {
                throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nModel\n\nGot:\n' + _inspect(item));
              }

              return _ref17(_api2.default.sendSuccess(item, res));
            }).catch(function (err) {
              function _ref18(_id18) {
                if (!(_id18 instanceof Object)) {
                  throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id18));
                }

                return _id18;
              }

              if (!(err instanceof Error)) {
                throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
              }

              if (err.name === 'NotFoundError') return _ref18(_api2.default.sendFailed(404, [err.message], {}, res));
              return _ref18(_api2.default.sendFailed(500, [err.message], {}, res));
            });

          case 6:
            return _context6.abrupt('return', _context6.sent);

          case 7:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getByParam(_x11, _x12) {
    return _ref24.apply(this, arguments);
  };
}();

var _api = require('../services/ApiService/api');

var _api2 = _interopRequireDefault(_api);

var _example = require('../controllers/example');

var _example2 = _interopRequireDefault(_example);

var _example3 = require('../model/example');

var _example4 = _interopRequireDefault(_example3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  newItem: newItem,
  deleteItem: deleteItem,
  editItem: editItem,
  getItem: getItem,
  getAll: getAll,
  getByParam: getByParam
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