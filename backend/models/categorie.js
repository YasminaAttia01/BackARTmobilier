const mongoose = require("mongoose");
var categorieSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique: true,
    minlength: 3
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

module.exports = mongoose.model("Categorie", categorieSchema);
