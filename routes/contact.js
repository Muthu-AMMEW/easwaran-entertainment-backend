const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../utils/path.js')

const ContactM = require('../models/ContactModel.js');

router.post("/inputcontact", async(req,res)=>{

    let data = req.body;
    console.log(data);
    const details = await ContactM.create(data);
    res.send("success");
})

module.exports = router;