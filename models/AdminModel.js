const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    sno: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
        required: true,
    },
});

const VideoM = mongoose.model('VideoM', schema);
module.exports = VideoM;
