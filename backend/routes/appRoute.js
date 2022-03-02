const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const categorieController = require("../controllers/categorieController");

/* Afficher tous les articles */
router.get("/articles", auth.authenticate(), articleController.getAllArticles);

/* Afficher le total des articles */
router.get("/article/total", auth.authenticate(), articleController.countArticles);

/* Afficher un article */
router.get("/article/:id", auth.authenticate(), articleController.getArticleById);

/* Ajouter un article */
router.post("/article/ajouter", auth.authenticate(), articleController.addArticle);

/* Modifier un article */
router.put("/article/modifier/:id", auth.authenticate(), articleController.updateArticle);

/* Supprimer un article */
router.delete("/article/supprimer/:id", auth.authenticate(), articleController.deleteArticle);



/* Afficher toutes les categories */
router.get("/categories", auth.authenticate(), categorieController.getAllCategories);

/* Afficher le total des categories */
router.get("/categorie/total", auth.authenticate(), categorieController.countCategories);

/* Afficher une categorie */
router.get("/categorie/:id", auth.authenticate(), categorieController.getCategorieById);

/* Ajouter une categorie */
router.post("/categorie/ajouter", auth.authenticate(), categorieController.addCategorie);

/* Modifier une categorie */
router.put("/categorie/modifier/:id", auth.authenticate(), categorieController.updateCategorie);

/* Supprimer une categorie */
router.delete("/categorie/supprimer/:id", auth.authenticate(), categorieController.deleteCategorie);


module.exports = router;
