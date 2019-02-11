'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../middleware/user');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('../middleware/validation/user');

var _user4 = _interopRequireDefault(_user3);

var _middleware = require('../services/AuthService/middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var ROUTE_INDEX = '/';
var ROUTE_ID = '/:id';

/*
* Every part of documentation has #default# string which should be replaced
* with lowercase name of the item. #Default# should be replaces with capital letter.
* CRUD definition prepared in following routes.
*/

/**
 * @api {get} /user/ Get all user
 * 
 * @apiName getAllUser
 * @apiDescription Get all user
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 */
router.get(ROUTE_INDEX, _middleware.isAuthorized, [_user2.default.getAll]);

/**
 * @api {get} /user/:id Get user
 * 
 * @apiName getUser
 * @apiDescription Get one user matching id
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.get(ROUTE_ID, _middleware.isAuthorized, [_user4.default.getValidation, _user2.default.getItem]);

/**
 * @api {post} /user New user
 * 
 * @apiName newUser
 * @apiDescription Create new user with values stored in JSON object.
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.post(ROUTE_INDEX, [_user4.default.newValidation, _user2.default.newItem]);

/**
 * @api {put} /user/:id Edit user
 * 
 * @apiName editUser
 * @apiDescription Edit user, update to values in JSON object.
 * @apiGroup User
 * @apiVersion 0.0.0
 * 
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 * 
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.put(ROUTE_ID, _middleware.isAuthorized, [_user4.default.editValidation, _user2.default.editItem]);

/**
 * @api {delete} /user/:id Delete user
 * 
 * @apiName deleteUser
 * @apiDescription Delete user matching ID in URL
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.delete(ROUTE_ID, _middleware.isAuthorized, [_user4.default.deleteValidation, _user2.default.deleteItem]);

exports.default = router;