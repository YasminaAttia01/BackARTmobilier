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
      const article = await Article.findById(req.params.id).populate('categorie');
      res.json({
        article: article,
      });
  } 
  catch (error) {
    res.send("Error")
  }
};

const addArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  try {
      const article = await newArticle.save();
      res.json({
        article: article,
      });
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
      res.send({ message: "Successful" });
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