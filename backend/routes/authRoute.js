const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController')

User = require('../models/user');

/* Creer un compte */
router.post("/register", authController.register)

/* Se connecter*/
router.post("/login", passport.authenticate("local"), authController.login)

/* Se deconnecter */
router.post("/logout",  authController.logout)

module.exports = router