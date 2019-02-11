/* @flow */
import Joi from 'joi';
import ApiService from '../../services/ApiService/api';
import { getSchema, newSchema, assignContactsSchema, unassignContactSchema, assignMessageTypesSchema, unassignMessageTypeSchema } from './schema/sites';

async function newValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, newSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

async function getValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.headers, getSchema);
  if ( result.error !== null )
    return ApiService.badJoiValidationResponse(result.error, res);
  return next();
}

async function assignContactsValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, assignContactsSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

async function unassignContactValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, unassignContactSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

async function assignMessageTypesValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, assignMessageTypesSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

async function unassignMessageTypeValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, unassignMessageTypeSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

export {
  newValidation,
  getValidation,
  assignContactsValidation,
  unassignContactValidation,
  assignMessageTypesValidation,
  unassignMessageTypeValidation
};
