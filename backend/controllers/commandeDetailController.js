const express = require("express"),

User = require("../models/user"),
CommandeDetail = require("../models/commandeDetail");

const getAllCommandeDetails = async (req, res) => {
  try {
    const commandeDetails = await CommandeDetail.find();
    res.json({
      commandeDetails: commandeDetails,
    });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
};

const getCommandeDetailById = async (req, res) => {
  try {
      const commandeDetail = await CommandeDetail.findById(req.params.id);
      res.json({
        commandeDetail: commandeDetail,
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
};

const addCommandeDetail = async (req, res) => {
  const newCommandeDetail = new CommandeDetail(req.body);
  try {
      const commandeDetail = await newCommandeDetail.save();
      res.json({
        commandeDetail: commandeDetail,
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const updateCommandeDetail = async (req, res) => {
  try {
      const commandeDetail = await CommandeDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({
        commandeDetail: commandeDetail,
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const deleteCommandeDetail = async (req, res) => {
  try {
      const commandeDetail = await CommandeDetail.findByIdAndDelete(req.params.id);
      res.send({ message: "Successful" });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const countCommandeDetails = async (req, res) => {
  try {
      const count = await CommandeDetail.countDocuments();
      res.json({
        count: count,
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  getAllCommandeDetails,
  getCommandeDetailById,
  addCommandeDetail,
  updateCommandeDetail,
  deleteCommandeDetail,
  countCommandeDetails
};