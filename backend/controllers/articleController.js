const express = require("express"),

User = require("../models/user"),
Article = require("../models/article");
Categorie = require("../models/categorie");

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('categorie');
    res.json({
      articles: articles,
    });
  } 
  catch (error) {
      res.send("Error")
  }
};

const getArticleById = async (req, res) => {
  try {
      const article = await Article.findById(req.params.id).populate('category');
      res.json({
        article: article,
      });
  } 
  catch (error) {
    res.send("Error")
  }
};

const addArticle = async (req, res) => {
  try {
      const categorie = await Categorie.findOne({ _id: req.body.categorie });
      if (!categorie) {
        res.send({ message: "Categorie not found" });
      }
      else{
        const article = new Article(req.body);
        await article.save();
        res.json({
          article: article,
        });
      }
  } 
  catch (error) {
    res.send("Error")
  }
}

const updateArticle = async (req, res) => {
  try {
      const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({
        article: article,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const deleteArticle = async (req, res) => {
  try {
      const article = await Article.findByIdAndDelete(req.params.id);
      res.json({
        article: article,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const countArticles = async (req, res) => {
  try {
      const count = await Article.countDocuments();
      res.json({
        count: count,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
  countArticles
};