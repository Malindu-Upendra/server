const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const TempKeynotesSchema = Schema({
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
        type:String,
        default:'Not Approved'
    }
});

const tempKeynotes = mongoose.model('tempKeynotes', TempKeynotesSchema);

module.exports = tempKeynotes;