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

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _validation = require('./validation');

var _middleware = require('./middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var ROUTE_AUTH = '/';

/**
 * @api {post} /auth Get JWT token
 * @apiName Authorize
 * @apiDescription Post username and password to receive token
 * @apiGroup Authorization
 * @apiVersion 0.0.0
 *
 * @apiParam (JSON Body) {String} username Username
 * @apiParam (JSON Body) {String} password Password
 *
 */
router.post(ROUTE_AUTH, _validation.authorizeValidation, [_middleware.authorize]);

/**
 * @api {get} /auth Check token validity
 * @apiName Authorized
 * @apiDescription Post token in header and see if it works
 * @apiGroup Authorization
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 */
router.get(ROUTE_AUTH, _validation.tokenValidation, [_middleware.isAuthorized, authOk]);

/**
 * Helper function;
 * isAuthorized() returns next() if everything is OK,
 * this function ensures HTTP response 200
 */
function authOk(req, res) {
  if (!(req instanceof Object)) {
    throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));
  }

  if (!(res instanceof Object)) {
    throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
  }

  res.status(200);
}

exports.default = router;

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