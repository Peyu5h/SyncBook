const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const { readdirSync } = require("fs");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

// Routes
readdirSync("./routes").forEach((file) => {
  const route = require(`./routes/${file}`);
  if (typeof route === "function") {
    app.use("/", route);
  } else {
    console.error(`Invalid middleware in ${file}. Skipping.`);
  }
});

// Database
mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    dbName: "linkbook",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to DB: ", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
