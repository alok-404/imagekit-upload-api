const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    caption:String,
    postUrl:String
})

const postModel =mongoose.model("post",postSchema);

module.exports = postModel;

