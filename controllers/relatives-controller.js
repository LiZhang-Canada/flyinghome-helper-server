const knex = require("knex")(require("../knexfile"));

const getRelatives = async (req, res) => {
    try {
      const data = await knex.select("*")
      .from("relationship")
      .where({ "bind_user": req.params.id });;
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: `Error retrieving relationship data: ${error}`,
      });
    }
  };

  module.exports = {
    getRelatives,
  };