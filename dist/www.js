'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import application
var debug = (0, _debug2.default)('deepa:server');

/**
 * Get port from environment and store in Express.
 */
// Import dependencies
var port = normalizePort(process.env.PORT || _config2.default.PROJECT_PORT);
_app2.default.set('port', port);

/**
 * Create HTTP server.
 * 
 */

/* eslint-disable no-console */
var server = _http2.default.createServer(_app2.default);
console.log('Created server');

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  function _ref(_id) {
    if (!(typeof _id === 'number' || typeof _id === 'string' || typeof _id === 'boolean')) {
      throw new TypeError('Function "normalizePort" return value violates contract.\n\nExpected:\nnumber | string | boolean\n\nGot:\n' + _inspect(_id));
    }

    return _id;
  }

  if (!(typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean')) {
    throw new TypeError('Value of argument "val" violates contract.\n\nExpected:\nnumber | string | boolean\n\nGot:\n' + _inspect(val));
  }

  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return _ref(port);
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (!(error instanceof Object)) {
    throw new TypeError('Value of argument "error" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(error));
  }

  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Handle exception in promises and so on
 */
process.on('unhandledRejection', function (reason, p) {
  if (!(reason instanceof Error)) {
    throw new TypeError('Value of argument "reason" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(reason));
  }

  if (!(p instanceof _promise2.default)) {
    throw new TypeError('Value of argument "p" violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(p));
  }

  console.log('Unhandled Rejection at: Promise '.red.bold);
  console.log(p);
  console.log('\n');
  console.log(' reason: ', reason);
  console.log('End of unhandled Rejection at: Promise '.red.bold);
});

console.log('Port: ', port);
console.log(_colors2.default.random('--------APP IS READY--------'));

/* eslint-enable */

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