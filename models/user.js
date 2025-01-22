const mongoose = require('mongoose')
const arrType = mongoose.Types.Array

/**
 *  User Schema {
 *      username: String, password: String, details: JSON | Object
 *  }
 */
const userSchema = new mongoose.Schema({
  username: {
      type: String,
      unique: true,
  },
  password: {
    type: String,
    default: 'abc'
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
})

const User = mongoose.model('User', userSchema)

module.exports = User
