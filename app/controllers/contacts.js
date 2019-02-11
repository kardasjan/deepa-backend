import Model from '../model/contact';
import Site from '../model/site';
import CommonErrors from '../services/ErrorService/commonErrors';

async function getAll (param: Object | null): Promise {
  return await Model.find(param ? param : {}).exec()
    .then((items: Model[]): Model[] => {
      if (items === null)
        throw new CommonErrors.NotFoundError();
      return items;
    });
}

async function newFromObject (item: Object): Promise {
  return await new Model(item).save();
}

async function deleteById (id: string): Promise {
  return await Model.findByIdAndRemove(id).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

async function updateById (id: string, values: Object): Promise {
  return await Model.findOneAndUpdate({_id: id}, values, {new: true}).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

async function getById (id: string): Promise {
  return await Model.findById(id).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

async function getByParam (param: Object | null): Promise {
  return await Model.findOne(param ? param : {}).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

async function getAssignable (siteId: string): Promise {
  return await Site.findById(siteId).exec()
    .then((item: Site | null): Promise => {
      if (item === null) throw new Error("Site not found or contact already exists!");
      let assignedArray = [];
      for (var j = 0; j < item.contacts.length; j++) {
        assignedArray.push(item.contacts[j].contactId);
      }
      const query = { "_id" : { "$nin": assignedArray }}
      return Model.find(query).exec();
    });
}

export default {
  getAll,
  newFromObject,
  deleteById,
  updateById,
  getById,
  getByParam,
  getAssignable
};
