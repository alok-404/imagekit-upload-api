const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');

const router = express.Router();

const upload = multer({storage:multer.memoryStorage()}); // Store the uploaded file in memory

/*postUrl
caption
*/

router.post("/upload",upload.single("postUrl"),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const fileData = await uploadFile(req.file.buffer)
    console.log(fileData);
    
    res.status(201).json({
        message:"Post created successfully",
        post:req.body
    })
})

module.exports = router;