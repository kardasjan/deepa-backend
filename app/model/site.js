import mongoose from 'mongoose';
import connection from '../connection';
import {COLLECTION as COLLECTION_USERS} from './user';
import {COLLECTION as COLLECTION_MESSAGETYPES} from './messageType';
import {COLLECTION as COLLECTION_CONTACTS} from './contact';

const Schema = mongoose.Schema;
export const COLLECTION = 'Site';

const contactsSchema = new Schema({
  contactId: {
    ref: COLLECTION_CONTACTS,
    type: Schema.Types.ObjectId
  },
  messageTypes: [{
    ref: COLLECTION_MESSAGETYPES,
    type: Schema.Types.ObjectId
  }],
  _id: false
})

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  contacts: {
    type: [contactsSchema]
  },
  created_by: [{
    ref: COLLECTION_USERS,
    type: Schema.Types.ObjectId
  }],
  created_at: Date,
  updated_at: Date
});

schema.pre('save', function (next: Function){
  const now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

export default connection.model(COLLECTION, schema, 'sites');
