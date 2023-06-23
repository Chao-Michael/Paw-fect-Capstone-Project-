const express = require("express");
const router = express.Router();
const favouritesController = require("../controllers/favourites-controller");

router.route("/").get(favouritesController.favourites);
router.route("/add").post(favouritesController.addToFavourites);

module.exports = router;
