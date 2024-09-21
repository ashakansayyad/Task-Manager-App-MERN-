const express = require("express");

// import router file from folder
const taskRoutes = require("./routes/taskRoutes");
const mongoose = require("mongoose");
// import .env from package
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');

// it use to load environment variable  from .env
dotenv.config();

app.use(express.json());
app.use(cors());

// (/api )--->base path (taskRoutes)--->another path
app.use("/api", taskRoutes);

mongoose
  .connect(process.env.MONGODB_URL)    //to connect url in dotenv file
  .then(() => console.log("MongoDB Connected Successfully !"))
  .catch((error) => console.log("Connection Error: ", error));


module.exports = app;