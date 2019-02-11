/* @flow */
import ApiService from '../services/ApiService/api';
import SitesController from '../controllers/sites';
import Site from '../model/site';

async function getAll (req: Object, res: Object): Promise {
  let filter = req.headers.filter ? JSON.parse(req.headers.filter) : {};
  return await SitesController.getAll(filter)
    .then((sites: Site[]): Object => {
      return ApiService.sendSuccess(sites, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'SitesNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function getSite (req: Object, res: Object): Promise {
  let filter = req.headers.filter ? JSON.parse(req.headers.filter) : {};
  return await SitesController.getOne(filter)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'SiteNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function newSite (req: Object, res: Object): Object {
  return await SitesController.addSite(req.body.site)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'ValidationError')
        return ApiService.badMongooseValidationResponse(err, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function assignContacts (req: Object, res: Object): Object {
  return await SitesController.assignContacts(req.body.values)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      console.log(err);
      if (err.name === 'SiteNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function unassignContact (req: Object, res: Object): Object {
  return await SitesController.unassignContact(req.body.values)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      console.log(err);
      if (err.name === 'SiteNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function assignMessageTypes (req: Object, res: Object): Object {
  return await SitesController.assignMessageTypes(req.body.values)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      console.log(err);
      if (err.name === 'SiteNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function unassignMessageType (req: Object, res: Object): Object {
  return await SitesController.unassignMessageType(req.body.values)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      console.log(err);
      if (err.name === 'SiteNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

export {
  getAll,
  getSite,
  newSite,
  assignContacts,
  unassignContact,
  assignMessageTypes,
  unassignMessageType
};
