const express = require("express");
const connectToDB = require("./db/db");
const imageRoutes = require("./routes/images.routes");

connectToDB();

const app = express();

app.use(express.json());

app.use("/",imageRoutes);




module.exports = app;