const express = require("express");
const connectToDB = require("./db/db");
const imageRoutes = require("./routes/images.routes");
const cors = require("cors")

connectToDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/",imageRoutes);





module.exports = app;