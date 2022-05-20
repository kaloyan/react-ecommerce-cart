require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = dbConnect;
