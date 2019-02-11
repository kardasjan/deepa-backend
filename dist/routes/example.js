'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _example = require('../middleware/example');

var _example2 = _interopRequireDefault(_example);

var _example3 = require('../middleware/validation/example');

var _example4 = _interopRequireDefault(_example3);

var _middleware = require('../services/AuthService/middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var ROUTE_INDEX = '/';
var ROUTE_ID = '/:id';
var ROUTE_PARAM = '/getByParam';

/*
* Every part of documentation has #replace# string which should be replaced
* with lowercase name of the item. #Replace# should be replaced with capital letter.
* CRUD definition prepared in following routes.
*/

/**
 * @api {get} /#replace#/ Get all #replace#
 * 
 * @apiName getAll#Replace#
 * @apiDescription Get all #replace#
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_INDEX, _middleware.isAuthorized, [_example4.default.getAllValidation, _example2.default.getAll]);

/**
 * @api {get} /#replace#/getByParam Get #replace#
 * 
 * @apiName get#Replace#
 * @apiDescription Get one #replace# matching id
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_PARAM, _middleware.isAuthorized, [_example4.default.getValidation, _example2.default.getItem]);

/**
 * @api {get} /#replace#/param Get #replace# by param
 * 
 * @apiName get#Replace#
 * @apiDescription Get one #replace# matching id
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.get(ROUTE_ID, _middleware.isAuthorized, [_example4.default.getByParamValidation, _example2.default.getByParam]);

/**
 * @api {post} /#replace# New #replace#
 * 
 * @apiName new#Replace#
 * @apiDescription Create new #replace# with values stored in JSON object.
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.post(ROUTE_INDEX, _middleware.isAuthorized, [_example4.default.newValidation, _example2.default.newItem]);

/**
 * @api {put} /#replace#/:id Edit #replace#
 * 
 * @apiName edit#Replace#
 * @apiDescription Edit #replace#, update to values in JSON object.
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 * 
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 * 
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.put(ROUTE_ID, _middleware.isAuthorized, [_example4.default.editValidation, _example2.default.editItem]);

/**
 * @api {delete} /#replace#/:id Delete #replace#
 * 
 * @apiName delete#Replace#
 * @apiDescription Delete #replace# matching ID in URL
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.delete(ROUTE_ID, _middleware.isAuthorized, [_example4.default.deleteValidation, _example2.default.deleteItem]);

exports.default = router;