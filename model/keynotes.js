const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const KeynotesSchema = Schema({
    title: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    speakerImg:{
        type: String
    },
    cloudinaryID:{
        type: String
    },
    approval:{
        type:String
    }
});

const keynotes = mongoose.model('keynotes', KeynotesSchema);

module.exports = keynotes;