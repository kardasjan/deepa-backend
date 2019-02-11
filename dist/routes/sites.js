'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _sites = require('../middleware/sites');

var _sites2 = require('../middleware/validation/sites');

var _middleware = require('../services/AuthService/middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Routes
var ROUTE_FIND = '/';
var ROUTE_SITE = '/site';
var ROUTE_SITE_ID = '/site/:id';

/**
 * @api {get} /sites/ Get all
 * 
 * @apiName getAll
 * @apiDescription Get all sites matching filter object.
 * @apiGroup Sites
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 * 
 * @apiParam (JSON) {Object} filter Parameters for Mongoose query
 *
 */
router.get(ROUTE_FIND, _middleware.isAuthorized, [_sites2.getValidation, _sites.getAll]);

/**
 * @api {get} /sites/site Get site
 * 
 * @apiName getSite
 * @apiDescription Get one site matching filter object.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 * 
 * @apiParam (JSON) {Object} filter Parameters for Mongoose query
 *
 */
router.get(ROUTE_SITE, _middleware.isAuthorized, [_sites2.getValidation, _sites.getSite]);

/**
 * @api {post} /sites/site New site
 * 
 * @apiName newSite
 * @apiDescription Create new site with values stored in site object.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (POST PARAM - JSON) {Object} site Site values
 *
 */
router.post(ROUTE_SITE, _middleware.isAuthorized, [_sites2.newValidation, _sites.newSite]);

/**
 * @api {put} /sites/site/:id Edit site
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiName editSite
 * @apiDescription Edit site to values stored in site object.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (JSON) {Object} site Site values
 *
 */
router.put(ROUTE_SITE_ID, _middleware.isAuthorized, []);

/**
 * @api {delete} /sites/site/:id Delete site
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiName deleteSite
 * @apiDescription Delete site matching ID in URL
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 */
router.delete(ROUTE_SITE_ID, _middleware.isAuthorized, []);

exports.default = router;