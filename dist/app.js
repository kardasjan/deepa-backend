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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _sites = require('./routes/sites');

var _sites2 = _interopRequireDefault(_sites);

var _example = require('./routes/example');

var _example2 = _interopRequireDefault(_example);

var _user = require('./routes/user');

var _user2 = _interopRequireDefault(_user);

var _routes = require('./services/AuthService/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// view engine setup

// Import routes
// Import dependencies
app.set('views', _path2.default.join(__dirname, '../views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.use('/', _index2.default);
app.use('/sites', _sites2.default);
app.use('/example', _example2.default);
app.use('/user', _user2.default);
app.use('/auth', _routes2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  if (!(req instanceof Object)) {
    throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));
  }

  if (!(res instanceof Object)) {
    throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
  }

  if (!(typeof next === 'function')) {
    throw new TypeError('Value of argument "next" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(next));
  }

  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res) {
  if (!(err instanceof Error)) {
    throw new TypeError('Value of argument "err" violates contract.\n\nExpected:\nError\n\nGot:\n' + _inspect(err));
  }

  if (!(req instanceof Object)) {
    throw new TypeError('Value of argument "req" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(req));
  }

  if (!(res instanceof Object)) {
    throw new TypeError('Value of argument "res" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(res));
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

exports.default = app;

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