const mongoose = require("mongoose");
var articleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength: [3, 'Must be at least 3 characters.']
  },
  image:{
    type:String,
    required:true
  },
  prix:{
    type:String,
    required:true
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

module.exports = mongoose.model("Article", articleSchema);
