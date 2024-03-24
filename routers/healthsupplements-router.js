const router = require("express").Router();
const healthSupplementsController = require("../controllers/healthsupplements-controller");

router
  .route("/healthsupplements/:id")
  .get(healthSupplementsController.getOneHealthSupplement)



module.exports = router;