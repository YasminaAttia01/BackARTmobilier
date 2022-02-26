const mongoose = require("mongoose");
var venteSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    venteDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VenteDetail',
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

module.exports = mongoose.model("Vente", venteSchema);