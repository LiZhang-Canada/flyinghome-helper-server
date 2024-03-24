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

// all users routes
app.use("/api", healthsupplementsRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
