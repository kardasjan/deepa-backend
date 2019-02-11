/* @flow */
import Site from '../model/site';
import mongoose from 'mongoose';
import { SiteNotFoundError, SitesNotFoundError } from '../services/ErrorService/sites';
import { MongooseError } from '../services/ErrorService/commonErrors';

async function getAll (filter: Object = {}): Promise {
  return await Site.find(filter).exec()
    .then( (sites: Site[] | null): Site[] => {
      if (sites === null) {
        throw new Error("Site not found!")
      }
      return sites;
    });
}

async function getOne (filter: Object = {}): Promise {
  return await Site.findOne(filter).populate({path: 'contacts.messageTypes'}).populate({path: 'contacts.contactId'}).exec()
    .then( (site: Site | null): Site => {
      console.log(site.contacts);
      if (site === null) {
        Error("Site not found!")
      }
      return site;
    });
}

async function addSite (site: Object): Promise {
  return await new Site(site).save();
}

async function assignContacts (values: Object): Promise {
  const { siteId, contacts } = values;

  let newContacts = [];
  for (let i = 0; i < contacts.length; i++) { 
    let newContact = {
      contactId: contacts[i],
      messageTypes: []
    }
    newContacts.push(newContact);
  }
  
  const conditions = {
    _id: siteId,
    'contacts.contactId': { $nin: contacts }
  }
  const update = {
    $push: { contacts: { $each: newContacts } }
  }
  
  return await Site.findOneAndUpdate(conditions, update, {new: true}).exec()
    .then( (site: Site | null): Site => {
      if (site === null) {
        throw new Error("Site not found or contact already exists!")
      }
      return site;
    });
}

async function unassignContact (values: Object): Promise {
  const { siteId, contactId } = values;
  
  const conditions = {
    _id: siteId,
    'contacts.contactId': contactId
  }

  const update = {
    $pull: { 'contacts': { 'contactId': contactId }}
  }
  
  return await Site.findOneAndUpdate(conditions, update).exec()
    .then( (site: Site | null): Site => {
      if (site === null) {
        throw new Error("Site not found or contact already exists!")
      }
      return site;
    });
}

async function assignMessageTypes (values: Object): Promise {
  const { siteId, contactId, messageTypes } = values;
  
  const conditions = {
    _id: siteId,
    'contacts.contactId':  contactId
  }
  // Convert array of string to ObjectId
  const update = {
    $addToSet: { 'contacts.$.messageTypes': { $each: messageTypes.map(s => mongoose.Types.ObjectId(s)) }} 
  }

  return await Site.findOneAndUpdate(conditions, update, {new: true}).exec()
    .then( (site: Site | null): Site => {
      console.log(site);
      if (site === null) {
        throw new Error("Site or contact not found!")
      }
      return site;
    });
}

async function unassignMessageType (values: Object): Promise {
  const { siteId, contactId, messageType } = values;
  
  const conditions = {
    _id: siteId,
    'contacts.contactId': contactId
  }

  const update = {
    $pull: { 'contacts.$.messageTypes': messageType }
  }

  return await Site.findOneAndUpdate(conditions, update, {new: true}).exec()
    .then( (site: Site | null): Site => {
      console.log(site);
      if (site === null) {
        throw new Error("Objekt nebo jeho kontakt nebyl nalezen.")
      }
      return site;
    });
}

export default {
  getAll,
  getOne,
  addSite,
  assignContacts,
  unassignContact,
  assignMessageTypes,
  unassignMessageType
};
