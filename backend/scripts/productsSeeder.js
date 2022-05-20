require("dotenv").config();
const path = require("path");

const products = require(path.join(__dirname, "..", "data", "products.js"));
const dbConnect = require(path.join(__dirname, "..", "config", "database.js"));
const Product = require(path.join(__dirname, "..", "models", "Product.js"));

dbConnect();

const importProductsinDB = async () => {
  try {
    // First empty database
    await Product.deleteMany({});

    // Then import example products
    await Product.insertMany(products);

    console.log("Products imported successfully!");
    process.exit();
  } catch (err) {
    console.log("Products imported Failed!");
    console.error(err);
    process.exit(1);
  }
};

importProductsinDB();
