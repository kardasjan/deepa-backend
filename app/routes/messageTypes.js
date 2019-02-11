import express from 'express';
import Middleware from '../middleware/messageTypes';
import Validation from '../middleware/validation/messageTypes';
import { isAuthorized } from '../services/AuthService/middleware';

const router = express.Router();

const ROUTE_INDEX = '/';
const ROUTE_ID = '/:id';
const ROUTE_PARAM = '/getByParam';
const ROUTE_ASSIGNABLE = '/getAssignable';

/*
* Every part of documentation has messageTypes string which should be replaced
* with lowercase name of the item. MessageTypes should be replaced with capital letter.
* CRUD definition prepared in following routes.
* Also replace example path at the beginning of the file.
*/

/**
 * @api {get} /messageTypes/ Get all messageTypes
 * 
 * @apiName getAllMessageTypes
 * @apiDescription Get all messageTypes
 * @apiGroup MessageTypes
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_INDEX, isAuthorized, [Validation.getAllValidation, Middleware.getAll]);

/**
 * Empty filter object means getAll
 * 
 * @api {get} /messageTypes/getByParam Get messageTypes
 * 
 * @apiName getMessageTypes
 * @apiDescription Get one messageTypes matching id
 * @apiGroup MessageTypes
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_PARAM, isAuthorized, [Validation.getValidation, Middleware.getItem]);

/**
 * @api {get} /messageTypes/getAssignable Get assignable messageTypes
 * 
 * @apiName getAssignable
 * @apiDescription Get contacts which can be assigned to a site
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {String} siteid Site ID
 * @apiHeader (Header) {String} contactid Contact ID
 *
 */
router.get(ROUTE_ASSIGNABLE, isAuthorized, [Validation.getAssignableValidation, Middleware.getAssignable]);

/**
 * @api {get} /messageTypes/param Get messageTypes by param
 * 
 * @apiName getMessageTypes
 * @apiDescription Get one messageTypes matching id
 * @apiGroup MessageTypes
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.get(ROUTE_ID, isAuthorized, [Validation.getByParamValidation, Middleware.getByParam]);

/**
 * @api {post} /messageTypes New messageTypes
 * 
 * @apiName newMessageTypes
 * @apiDescription Create new messageTypes with values stored in JSON object.
 * @apiGroup MessageTypes
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.post(ROUTE_INDEX, isAuthorized, [Validation.newValidation, Middleware.newItem]);

/**
 * @api {put} /messageTypes/:id Edit messageTypes
 * 
 * @apiName editMessageTypes
 * @apiDescription Edit messageTypes, update to values in JSON object.
 * @apiGroup MessageTypes
 * @apiVersion 0.0.0
 * 
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 * 
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.put(ROUTE_ID, isAuthorized, [Validation.editValidation, Middleware.editItem]);

/**
 * @api {delete} /messageTypes/:id Delete messageTypes
 * 
 * @apiName deleteMessageTypes
 * @apiDescription Delete messageTypes matching ID in URL
 * @apiGroup MessageTypes
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.delete(ROUTE_ID, isAuthorized, [Validation.deleteValidation, Middleware.deleteItem]);

export default router;
