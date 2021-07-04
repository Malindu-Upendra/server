const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const attendeeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    }
});

const attendee = mongoose.model('attendee', attendeeSchema);
module.exports = attendee;