const mongoose = require("mongoose");
var categorieSchema = new mongoose.Schema({
  name:{
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

module.exports = mongoose.model("Categorie", categorieSchema);
