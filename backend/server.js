const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.end("wellcome");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
