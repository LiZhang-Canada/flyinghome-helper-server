const router = require("express").Router();
const relativesController = require("../controllers/relatives-controller");



  router
  .route("/relatives")
  .get(relativesController.getRelatives)

module.exports = router;