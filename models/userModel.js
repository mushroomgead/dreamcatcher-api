const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true, // Primary key
    lowercase: true,
    trim: true,
    required: true
  },
  hash_password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password)
}

// mongoose.model(modelName, schemaName, collectionName)
module.exports = mongoose.model('User', UserSchema)
