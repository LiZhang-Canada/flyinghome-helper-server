const knex = require("knex")(require("../knexfile"));

const getShoppingListPerUser = async (req, res) => {
    try {
      const data = await knex
        .select(
          "shoppinglist.id",
          "users.email",
          "healthsupplements.item_name",
          "healthsupplements.img",
          "relationship.email",
          "relationship.relationship",
          "shoppinglist.quantity",
        )
        .from("shoppinglist")
        .join("users", "shoppinglist.user_id", "users.id")
        .join("healthsupplements", "shoppinglist.item_id", "healthsupplements.id")
        .join("relationship", "shoppinglist.relationship_id", "relationship.id")
        .where({ "shoppinglist.user_id": req.params.id });
  
      if (data.length === 0) {
        return res.status(404).json({
          message: `User's list with ID ${req.params.id} not found`,
        });
      }
  
      res.status(200).json(data);
    } catch (err) {
      res
        .status(500)
        .send(`Unable to fetch user's list with ID ${req.params.id}`);
    }
  };

  const addShoppingList = async (req, res) => {
    const { relationship_email, user_email, order_list} = req.body;
    if (!relationship_email || !user_email || !order_list ) {
      return res.status(400).send("Please provide all required fields");
    }
  
    try {
      const userExists = await knex("users")
      .where("email", user_email)
      .first();
    if (!userExists) {
      return res.status(400).send(`Please make sure ${user_email} has registered in our website`);
    }

      const relationExists = await knex("relationship")
      .where("email", relationship_email)
      .where ("bind_user", userExists.id)
      .first();
    if (!relationExists) {
      return res.status(400).send(`oops, you're not  ${user_email}'s relative. `);
    }





      const newList = [];
      for (let i = 0 ; i < order_list.length ; i++){
        newList.push({
            user_id: userExists.id,
            item_id: order_list[i].newKey,
            relationship_id: relationExists.id,
            quantity: order_list[i].value,
          }
          )
      }
  
      knex("shoppinglist")
      .where('relationship_id', relationExists.id)
      .del()
      .then(() => {
      return knex('shoppinglist')
      .insert(newList)
      })
        .then((result) => {
          res.status(201).send('Data Inserted');
        })
        .catch((err) => {
          res.status(500).send("Error in creating order list");
        });
    } catch (err) {
      res.status(500).send("Error in creating order list");
    }
  };

  module.exports = {
    addShoppingList,
    getShoppingListPerUser,
  }