const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const jwt = require("jsonwebtoken");
// const { users } = require("../consts.js");

// ## GET /my-list
// -   Gets information about the currently logged in user.
// -   If no valid JWT is provided, this route will respond with 401 Unauthorized.
// -   Expected headers: { Authorization: "Bearer JWT_TOKEN_HERE" }
router.get("/", async (req, res) => {
  // If there is no auth header provided
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  // Parse the bearer token
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];

  // Verify the token
  try {
    const decodedToken = jwt.verify(authToken, process.env.JWT_KEY);

    // Respond with the appropriate user data
    const user = await knex("users").where({ id: decodedToken.id }).first();
    delete user.password;

    res.send(user);
  } catch (error) {
    res.status(401).send("Invalid auth token");
  }
});

module.exports = router;
