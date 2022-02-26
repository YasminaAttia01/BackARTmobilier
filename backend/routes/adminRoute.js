const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const auth = require("../middleware/auth")();

/* router.get("/articles", auth.authenticate(), articleController.getAllArticles);
router.get("/article", auth.authenticate(), articleController.getAllArticlById);  */

module.exports = router;
