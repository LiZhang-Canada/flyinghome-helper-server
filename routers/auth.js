const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { users } = require("../consts");

// ## POST /auth/register
// - Creates a new user.
// - Expected body: { name, email, password }
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).send("Please enter the required fields");
    }
  
    const hashedPassword = bcrypt.hashSync(password);
  
    // Create the new user
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
  
    // Insert it into our database
    try {
      await knex("users").insert(newUser);
      res.status(201).send("Registered successfully");
    } catch (error) {
      console.error(error);
      res.status(400).send("Failed registration");
    }
  });
// ## POST /auth/login
// -   Generates and responds a JWT for the user to use for future authorization.
// -   Expected body: { email, password }
// -   Response format: { token: "JWT_TOKEN_HERE" }
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).send("Please enter the required fields");
  }

  // Find the user
//   const user = users.find((user) => user.email === email);
const user = await knex("users").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }

  // Validate the password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  // Generate a token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.send({ token });
});

module.exports = router;
