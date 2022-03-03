const express = require("express"),

User = require("../models/user"),
CommandeDetail = require("../models/commandeDetail");

const getAllCommandeDetails = async (req, res) => {
  try {
    const commandeDetails = await CommandeDetail.find();
    res.json({ 
      status: "Success",
      message: {
        commandeDetails: commandeDetails,
      }
    });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
};

const getCommandeDetailById = async (req, res) => {
  try {
      const commandeDetail = await CommandeDetail.findById(req.params.id);
      res.json({ 
        status: "Success",
        message: {
          commandeDetail: commandeDetail,
        }
      });
  } 
  catch (error) {
    res.json({ 
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
        status: "Success",
        message: {
          commandeDetail: commandeDetail,
        }
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

const updateCommandeDetail = async (req, res) => {
  try {
      const commandeDetail = await CommandeDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ 
        status: "Success",
        message: {
          commandeDetail: commandeDetail,
        }
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

const deleteCommandeDetail = async (req, res) => {
  try {
      const commandeDetail = await CommandeDetail.findByIdAndDelete(req.params.id);
      res.json({ 
        status: "Success",
        message: "Successful delete commandeDetail"
      });
  } 
  catch (error) {
    res.json({ 
      status: "Error",
      message: error.message
    });
  }
}

const countCommandeDetails = async (req, res) => {
  try {
      const count = await CommandeDetail.countDocuments();
      res.json({ 
        status: "Success",
        message: {
          count: count,
        }
      });
  } 
  catch (error) {
    res.json({ 
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