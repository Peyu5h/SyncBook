const express = require("express");
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");

const { readdirSync } = require("fs");
const app = express();
app.use(cors());

//routes
readdirSync("./routes").forEach((file) => {
  const route = require(`./routes/${file}`);
  if (typeof route === "function") {
    app.use("/", route);
  } else {
    console.error(`Invalid middleware in ${file}. Skipping.`);
  }
});

//database
mongoose
  .connect(process.env.URL, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to DB: ", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
