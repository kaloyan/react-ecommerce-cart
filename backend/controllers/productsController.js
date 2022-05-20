const path = require("path");
const Product = require(path.join(__dirname, "..", "models", "Product.js"));

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products.lenght == 0)
      res.status(204).json({ message: "No products found." }); // No content

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server ERROR!" });
  }
};

const getProductById = async (req, res) => {
  if (!req.params.id)
    return res.status(400).json({ message: "Product ID is required!" });

  try {
    const products = await Product.findOne({ _id: req.params.id }).exec();

    if (products.lenght == 0)
      res.status(204).json({ message: "No products found." }); // No content

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server ERROR!" });
  }
};

module.exports = { getAllProducts, getProductById };
