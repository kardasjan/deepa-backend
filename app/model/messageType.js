import mongoose from 'mongoose';
import connection from '../connection';

const Schema = mongoose.Schema;
export const COLLECTION = 'MessageType';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  technology: {
    type: String,
    required: true
  }
});

export default connection.model(COLLECTION, schema, 'messageTypes');
