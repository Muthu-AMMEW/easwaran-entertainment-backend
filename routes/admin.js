const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../utils/path.js');

const VideosM = require('../models/AdminModel.js');

router.get("/videos", async(req,res)=>{

    const videos = await VideosM.find();
    res.send(videos);
})

router.post("/videos", async(req,res)=>{

    let data = req.body;
    console.log(data);
    const details = await VideosM.create(data);
    res.send("success");
})


module.exports = router;
 