'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseError3 = require('./BaseError');

var _BaseError4 = _interopRequireDefault(_BaseError3);

var _sites = require('./messages/sites');

var _sites2 = _interopRequireDefault(_sites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteNotFoundError = function (_BaseError) {
  (0, _inherits3.default)(SiteNotFoundError, _BaseError);

  function SiteNotFoundError() {
    (0, _classCallCheck3.default)(this, SiteNotFoundError);
    return (0, _possibleConstructorReturn3.default)(this, (SiteNotFoundError.__proto__ || (0, _getPrototypeOf2.default)(SiteNotFoundError)).call(this, _sites2.default.SITE_NOT_FOUND));
  }

  return SiteNotFoundError;
}(_BaseError4.default);

var SitesNotFoundError = function (_BaseError2) {
  (0, _inherits3.default)(SitesNotFoundError, _BaseError2);

  function SitesNotFoundError() {
    (0, _classCallCheck3.default)(this, SitesNotFoundError);
    return (0, _possibleConstructorReturn3.default)(this, (SitesNotFoundError.__proto__ || (0, _getPrototypeOf2.default)(SitesNotFoundError)).call(this, _sites2.default.SITES_NOT_FOUND));
  }

  return SitesNotFoundError;
}(_BaseError4.default);

exports.default = {
  SiteNotFoundError: SiteNotFoundError,
  SitesNotFoundError: SitesNotFoundError
};