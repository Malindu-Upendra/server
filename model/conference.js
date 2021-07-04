const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const ConferenceSchema = Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    venue:{
        type: String
    },
    date:{
        type: String
    },
    price:{
        type:Number
    }
});

const conference = mongoose.model('conference', ConferenceSchema);
module.exports = conference;