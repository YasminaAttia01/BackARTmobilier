User = require("../models/user"),
Article = require("../models/article");
Categorie = require("../models/categorie");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.json({
      categories: categories,
    });
  } 
  catch (error) {
      res.send("Error")
  }
};

const getCategorieById = async (req, res) => {
  try {
      const categorie = await Categorie.findById(req.params.id);
      res.json({
        categorie: categorie,
      });
  } 
  catch (error) {
    res.send("Error")
  }
};

const addCategorie = async (req, res) => {
  const newCategorie = new Categorie(req.body);
  try {
      const categorie = await newCategorie.save();
      res.json({
        categorie: categorie,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const updateCategorie = async (req, res) => {
  try {
      const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({
        categorie: categorie,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const deleteCategorie = async (req, res) => {
  try {
      const categorie = await Categorie.findByIdAndDelete(req.params.id);
      res.json({
        categorie: categorie,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const countCategories = async (req, res) => {
  try {
      const count = await Categorie.countDocuments();
      res.json({
        count: count,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

module.exports = {
  getAllCategories,
  getCategorieById,
  addCategorie,
  updateCategorie,
  deleteCategorie,
  countCategories
};