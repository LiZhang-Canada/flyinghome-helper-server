const router = require("express").Router();
const shoppinglistController = require("../controllers/shoppinglist-controller");

  router
  .route("/shoppinglist")
  .post(shoppinglistController.addShoppingList)


  router
  .route("/shoppinglist/:id")
  .get(shoppinglistController.getShoppingListPerUser)
  
module.exports = router;