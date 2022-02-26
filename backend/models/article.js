const mongoose = require("mongoose");
var articleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique: true,
    minlength: [3, 'Must be at least 3 characters.']
  },
  description:{
    type:String,
  },
  image:{
    type:String,
    required:true
  },
  prix:{
    type:Number,
    required:true
  },
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie',
    required: true
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
