const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const conferenceTracksSchema = Schema({
    heading: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});

const conferenceTracks= mongoose.model('conferenceTracks', conferenceTracksSchema);
module.exports = conferenceTracks;