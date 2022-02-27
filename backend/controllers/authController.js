const express = require("express"),
authConfig = require("../config/authConfig"),
jwt = require("jwt-simple");

User = require("../models/user");

const register = async (req, res) => {
  try {
    await User.register(
      new User({ name: req.body.name, username: req.body.username, email: req.body.email }),
      req.body.password,
      function (err, msg) {
        if (err) {
          res.send({ message: "Error register" });
        } 
        else {
          res.send({ message: "Successful register" });
        }
      }
    );
  } 
  catch (error) {
    res.send("Error")
  }
  
};

const login = async (req, res) => {
  try {
    await User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log("Error Happened In auth /token Route");
      } 
      else {
        var payload = {
          id: user.id,
          expire: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
        };
        var token = jwt.encode(payload, authConfig.jwtSecret);
        res.json({
          token: token,
        });
      }
    });
  } 
  catch (error) {
    res.send("Error")
  }
  
};

const logout = (req, res) => {
  req.logout();
  res.send({ message: "Successful" });
};

module.exports = {
  login,
  register,
  logout,
};
