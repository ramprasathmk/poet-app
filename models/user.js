import { Types, Schema, model } from 'mongoose';
const arrType = Types.Array;

/**
 *  User Schema {
 *      username: String, password: String, details: JSON | Object
 *  }
 */
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    default: 'pass123456'
  },
  details: {
    type: JSON | Object,
    default: {}
  },
  poemId: {
    type: arrType,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model('User', userSchema);
