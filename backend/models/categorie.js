const mongoose = require("mongoose");
var categorieSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength: [3, 'Must be at least 3 characters.']
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
