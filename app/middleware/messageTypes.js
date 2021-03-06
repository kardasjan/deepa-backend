import ApiService from '../services/ApiService/api';
import Controller from '../controllers/messageTypes';
import Model from '../model/messageType';

/**
 * Middleware to handle errors from getting all items from desired database
 * @param {Object} req 
 * @param {Object} res 
 */
async function getAll (req: Object, res: Object): Promise {
  let filter = req.headers.filter ? JSON.parse(req.headers.filter) : {};
  return await Controller.getAll(filter)
    .then((items: Model[]): Object => {
      return ApiService.sendSuccess(items, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'NotFoundError')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function newItem (req: Object, res: Object): Promise {
  return await Controller.newFromObject(req.body.item)
    .then((item: Model): Object => {
      return ApiService.sendSuccess(item, res);
    })
    .catch((err: Error): Object => {
      // Mongoose validation error has the same name as Joi validation error,
      // ensure there is validation before and Joi errors caught outside of
      // this function
      if (err.name === 'ValidationError')
        return ApiService.badMongooseValidationResponse(err, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function deleteItem (req: Object, res: Object): Promise {
  const id = req.parameters.id;
  return await Controller.deleteById(id)
    .then((item: Model): Object => {
      return ApiService.sendSuccess(item, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'NotFoundError')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function editItem (req: Object, res: Object): Promise {
  const { id, values } = req.parameters;
  return await Controller.updateById(id, values)
    .then((item: Model): Object => {
      return ApiService.sendSuccess(item, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'NotFoundError')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function getItem (req: Object, res: Object): Promise {
  const id = req.parameters.id;
  return await Controller.deleteById(id)
    .then((item: Model): Object => {
      return ApiService.sendSuccess(item, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'NotFoundError')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function getByParam (req: Object, res: Object): Promise {
  return await Controller.getByParam(req.headers.filter)
    .then((item: Model): Object => {
      return ApiService.sendSuccess(item, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'NotFoundError')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function getAssignable (req: Object, res: Object): Promise {
  return await Controller.getAssignable(req.headers.siteid, req.headers.contactid)
    .then((item: Array): Object => {
      return ApiService.sendSuccess(item, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'NotFoundError')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

export default {
  newItem,
  deleteItem,
  editItem,
  getItem,
  getAll,
  getByParam,
  getAssignable
};
