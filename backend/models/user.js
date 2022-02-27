const mongoose = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");

const validator = require('validator')

var userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique: true,
  },
  email:{
    type:String,
    required:true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  password:{
    type:String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type:Date, 
    default: Date.now
  },
  updatedAt: {
    type:Date, 
    default: Date.now
  }
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
