import express from 'express';
import Middleware from '../middleware/contacts';
import Validation from '../middleware/validation/contacts';
import { isAuthorized } from '../services/AuthService/middleware';

const router = express.Router();

const ROUTE_INDEX = '/';
const ROUTE_ID = '/:id';
const ROUTE_PARAM = '/getByParam';
const ROUTE_ASSIGNABLE = '/getAssignable';

/*
* Every part of documentation has contacts string which should be replaced
* with lowercase name of the item. Contacts should be replaced with capital letter.
* CRUD definition prepared in following routes.
*/

/**
 * @api {get} /contacts/ Get all contacts
 * 
 * @apiName getAllContacts
 * @apiDescription Get all contacts
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_INDEX, isAuthorized, [Validation.getAllValidation, Middleware.getAll]);

/**
 * @api {get} /contacts/getByParam Get contacts
 * 
 * @apiName getContacts
 * @apiDescription Get one contacts matching id
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_PARAM, isAuthorized, [Validation.getValidation, Middleware.getItem]);

/**
 * @api {get} /contacts/getAssignable Get assignable contacts
 * 
 * @apiName getAssignable
 * @apiDescription Get contacts which can be assigned to a site
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {String} siteId Site ID
 *
 */
router.get(ROUTE_ASSIGNABLE, isAuthorized, [Validation.getAssignableValidation, Middleware.getAssignable]);

/**
 * @api {get} /contacts/param Get contacts by param
 * 
 * @apiName getContacts
 * @apiDescription Get one contacts matching id
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.get(ROUTE_ID, isAuthorized, [Validation.getByParamValidation, Middleware.getByParam]);

/**
 * @api {post} /contacts New contacts
 * 
 * @apiName newContacts
 * @apiDescription Create new contacts with values stored in JSON object.
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.post(ROUTE_INDEX, isAuthorized, [Validation.newValidation, Middleware.newItem]);

/**
 * @api {put} /contacts/:id Edit contacts
 * 
 * @apiName editContacts
 * @apiDescription Edit contacts, update to values in JSON object.
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 * 
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 * 
 * @apiParam (JSON Body) {Object} contact Object with values
 *
 */
router.put(ROUTE_ID, isAuthorized, [Validation.editValidation, Middleware.editItem]);

/**
 * @api {delete} /contacts/:id Delete contact
 * 
 * @apiName deleteContacts
 * @apiDescription Delete contacts matching ID in URL
 * @apiGroup Contacts
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.delete(ROUTE_ID, isAuthorized, [Validation.deleteValidation, Middleware.deleteItem]);

export default router;
