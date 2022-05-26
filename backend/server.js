require("dotenv").config();
const express = require("express");
const path = require("path");

const productRoutes = require(path.join(__dirname, "routes", "products.js"));

const dbConnect = require(path.join(__dirname, "config", "database.js"));
const app = express();

const PORT = process.env.PORT || 5000;

dbConnect();

// use json middleware
app.use(express.json());

// define routes
app.use("/api/products", productRoutes);

app.use(express.static("build"));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
