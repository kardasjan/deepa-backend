import Joi from 'joi';
import joiToApiErrors from '../../../services/ErrorService/joi';

export const newSchema = Joi.object().keys({
  site: Joi.object().required()
});

export const getSchema = Joi.object().keys({
  filter: Joi.object()
}).unknown(true);

export const assignContactsSchema = Joi.object().keys({
  values: Joi.object().keys({
    siteId: Joi.string().required(),
    contacts: Joi.array().required()
  }).required()
}).unknown(true);

export const unassignContactSchema = Joi.object().keys({
  values: Joi.object().keys({
    siteId: Joi.string().required(),
    contactId: Joi.string().required()
  }).required()
}).unknown(true);

export const assignMessageTypesSchema = Joi.object().keys({
  values: Joi.object().keys({
    siteId: Joi.string().required(),
    contactId: Joi.string().required(),
    messageTypes: Joi.array().required()
  }).required()
})

export const unassignMessageTypeSchema = Joi.object().keys({
  values: Joi.object().keys({
    siteId: Joi.string().required(),
    contactId: Joi.string().required(),
    messageType: Joi.string().required()
  }).required()
})
