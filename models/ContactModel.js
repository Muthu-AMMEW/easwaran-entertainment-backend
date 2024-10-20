const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    pno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },

});

const ContactM = mongoose.model('ContactM', schema);
module.exports = ContactM;
