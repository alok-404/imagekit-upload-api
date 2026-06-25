const express = require("express");
const connectToDB = require("./db/db");
const imageRoutes = require("./routes/images.routes");
const cors = require("cors")

connectToDB();

const app = express();
app.use(cors({
    origin:"https://imagekit-upload-api-eight.vercel.app",
    credentials: true
}));
app.use(express.json());

app.use("/",imageRoutes); //slash API with imageRoute



module.exports = app;