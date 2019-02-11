import express from 'express';
import { getAll, getSite, newSite, assignContacts, unassignContact, assignMessageTypes, unassignMessageType } from '../middleware/sites';
import { getValidation, newValidation, assignContactsValidation, unassignContactValidation, assignMessageTypesValidation, unassignMessageTypeValidation } from '../middleware/validation/sites';
import { isAuthorized } from '../services/AuthService/middleware';

const router = express.Router();

// Routes
const ROUTE_FIND = '/';
const ROUTE_SITE = '/site';
const ROUTE_SITE_ID = '/site/:id';

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
router.get(ROUTE_FIND, isAuthorized, [getValidation, getAll]);

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
router.get(ROUTE_SITE, isAuthorized, [getValidation, getSite]);

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
router.post(ROUTE_SITE, isAuthorized, [newValidation, newSite]);

/**
 * @api {post} /sites/site/assignContacts Assign contacts
 * 
 * @apiName assignContacts
 * @apiDescription Assign contacts to a site.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (POST PARAM - JSON) {siteId: string, contacts: [string]} values Site values
 *
 */
router.post(ROUTE_SITE + '/assignContacts', isAuthorized, [assignContactsValidation, assignContacts]);

/**
 * @api {post} /sites/site/unassignContact Unassign contact
 * 
 * @apiName unassignContact
 * @apiDescription Unassign contact from a site.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (POST PARAM - JSON) {siteId: string, contactId: string} values Site values
 *
 */
router.post(ROUTE_SITE + '/unassignContact', isAuthorized, [unassignContactValidation, unassignContact]);

/**
 * @api {post} /sites/site/assignMessageTypes Assign message types
 * 
 * @apiName assignMessageTypes
 * @apiDescription Assign message types to a contact belonging to a site.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (POST PARAM - JSON) {siteId: string, contactId: string, messageTypes: [string]} values Site values
 *
 */
router.post(ROUTE_SITE + '/assignMessageTypes', isAuthorized, [assignMessageTypesValidation, assignMessageTypes]);

/**
 * @api {post} /sites/site/unassignMessageType Unassign message type
 * 
 * @apiName unassignMessageType
 * @apiDescription Remove message type for a contact belonging to a site.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (POST PARAM - JSON) {siteId: string, contactId: string, messageType: string} values Site values
 *
 */
router.post(ROUTE_SITE + '/unassignMessageType', isAuthorized, [unassignMessageTypeValidation, unassignMessageType]);

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
router.put(ROUTE_SITE_ID, isAuthorized, []);

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
router.delete(ROUTE_SITE_ID, isAuthorized, []);

export default router;
