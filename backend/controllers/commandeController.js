const express = require("express"),

User = require("../models/user"),
Commande = require("../models/commande");

const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().populate('commandeDetail').populate('user');
    res.json({
      commandes: commandes,
    });
  } 
  catch (error) {
      res.send("Error")
  }
};

const getCommandeById = async (req, res) => {
  try {
      const commande = await Commande.findById(req.params.id).populate('commandeDetail').populate('user');
      res.json({
        commande: commande,
      });
  } 
  catch (error) {
    res.send("Error")
  }
};

const addCommande = async (req, res) => {
  const newCommande = new Commande(req.body);
  try {
      const commande = await newCommande.save();
      res.json({
        commande: commande,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const updateCommande = async (req, res) => {
  try {
      const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({
        commande: commande,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const deleteCommande = async (req, res) => {
  try {
      const commande = await Commande.findByIdAndDelete(req.params.id);
      res.send({ message: "Successful" });
  } 
  catch (error) {
    res.send("Error")
  }
}

const countCommandes = async (req, res) => {
  try {
      const count = await Commande.countDocuments();
      res.json({
        count: count,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

module.exports = {
  getAllCommandes,
  getCommandeById,
  addCommande,
  updateCommande,
  deleteCommande,
  countCommandes
};