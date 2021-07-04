const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const contactUSSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required: true
    },
});

const contactus = mongoose.model('contactus', contactUSSchema);

module.exports = contactus;