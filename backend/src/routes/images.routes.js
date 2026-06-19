const express = require("express");
const multer = require("multer");
const uploadFile = require("../service/storage.service");
const postModel = require("../models/post.model");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() }); // Store the uploaded file in memory

/*postUrl
caption
*/

router.post("/upload", upload.single("postUrl"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const fileData = await uploadFile(req.file.buffer);
  console.log(fileData);

  const post = await postModel.create({
    postUrl: fileData.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});


router.get("/posts",async (req,res)=>{
  const getPost =await postModel.find()

  res.json({
    message:"Post fetched successfully",
    getPost
  })
})

module.exports = router;
