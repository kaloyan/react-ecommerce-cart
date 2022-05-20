require("dotenv").config();
const express = require("express");
const path = require("path");
const dbConnect = require(path.join(__dirname, "config", "database.js"));
const app = express();

const PORT = process.env.PORT || 5000;

dbConnect();

app.get("*", (req, res) => {
  res.end("wellcome");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
