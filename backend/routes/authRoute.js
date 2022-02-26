const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController')

User = require('../models/user');

router.post("/register", authController.register)
router.post("/login", passport.authenticate("local"),  authController.login)
router.post("/logout",  authController.logout)

module.exports = router