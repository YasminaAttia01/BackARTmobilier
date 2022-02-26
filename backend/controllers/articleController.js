const express = require("express"),

User = require("../models/user"),
Article = require("../models/article");

const getAllArticles = async (req, res) => {
  try {
    var articles = await Article.find();
    console.log(articles)
    res.json({
      articles: articles,
    });
  } 
    catch (error) {
      res.send("Error")
  }
};

module.exports = {
  getAllArticles
};