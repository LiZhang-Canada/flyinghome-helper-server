const router = require("express").Router();
const healthSupplementsController = require("../controllers/healthsupplements-controller");

router
  .route("/healthsupplements/:id")
  .get(healthSupplementsController.getOneHealthSupplement)

  router
  .route("/healthsupplements")
  .get(healthSupplementsController.getHealthSupplements)

module.exports = router;