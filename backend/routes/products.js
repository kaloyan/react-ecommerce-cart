const express = require("express");
const path = require("path");
const router = express.Router();

const { getAllProducts, getProductById } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "productsController.js"
));

/*
 * @decs    Get all products form database
 * @rouet   /api/products
 * @access  Public
 */
router.get("/", getAllProducts);

/*
 * @decs    Get single product by ID form database
 * @rouet   /api/products/:id
 * @access  Public
 */
router.get("/:id", getProductById);

module.exports = router;
