User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users: users,
    });
  } 
  catch (error) {
      res.send("Error")
  }
};

const getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      res.json({
        user: user,
      });
  } 
  catch (error) {
    res.send("Error")
  }
};

const addUser = async (req, res) => {
  const newuser = new User(req.body);
  try {
      const user = await newUser.save();
      res.json({
        user: user,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const updateUser = async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({
        user: user,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

const deleteUser = async (req, res) => {
  try {
      const user = await user.findByIdAndDelete(req.params.id);
      res.send({ message: "Successful" });
  } 
  catch (error) {
    res.send("Error")
  }
}

const countUsers = async (req, res) => {
  try {
      const count = await User.countDocuments();
      res.json({
        count: count,
      });
  } 
  catch (error) {
    res.send("Error")
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  countUsers
};