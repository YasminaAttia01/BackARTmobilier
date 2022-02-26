const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique: true,
  },
  email:{
    type:String,
    trim: true,
    required:true,
    unique: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Please enter valid email address"]
  },
  password:{
    type:String,
    trim: true,
    required:true,
    minlength: 6
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
