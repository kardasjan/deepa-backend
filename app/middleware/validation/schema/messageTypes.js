import Joi from 'joi';

export const idSchema = Joi.object().keys({
  id: Joi.string().required()
});

export const itemSchema = Joi.object().keys({
  item: Joi.object().required()
});

export const filterSchema = Joi.object().keys({
  filter: Joi.object()
}).unknown(true);

export const getAssignableSchema = Joi.object().keys({
  siteid: Joi.string().required(),
  contactid: Joi.string().required()
}).unknown(true);
