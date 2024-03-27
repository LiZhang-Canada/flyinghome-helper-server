const knex = require("knex")(require("../knexfile"));

const getOneHealthSupplement = async (req, res) => {
  try {
    const data = await knex
      .select(
        "*"
        //   "id",
        //   "item_name",
        //   "img",
        //   "function_description",
        //   "daily_usage.",
        //   "function_in_Chinese",
        //   "usage_in_Chinese",
      )
      .from("healthsupplements")
      .where({ id: req.params.id });

    if (data.length === 0) {
      return res.status(404).json({
        message: `Healthsupplement with ID ${req.params.id} not found`,
      });
    }

    res.status(200).json(data[0]);
  } catch (err) {
    res
      .status(500)
      .send(`Unable to fetch Healthsupplement data with ID ${req.params.id}`);
  }
};

const getHealthSupplements = async (req, res) => {
  try {
    const data = await knex.select("id","item_name","img").from("healthsupplements");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving healthsupplements data: ${error}`,
    });
  }
};

module.exports = {
  getOneHealthSupplement,
  getHealthSupplements,
};
