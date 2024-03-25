const knex = require("knex")(require("./knexfile"));
const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
const PORT = process.env.PORT || 8080;

const healthsupplementsRoutes = require("./routers/healthsupplements-router");
//for user signup & login
const authRoutes = require("./routers/auth.js");
const listRoutes = require("./routers/myList.js");

// routes
app.use("/api", healthsupplementsRoutes);

app.use("/auth", authRoutes);
app.use("/my-list", listRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
