const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const importantDatesSchema = Schema({
    dates: {
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});

const importantDate= mongoose.model('importantDates', importantDatesSchema);
module.exports = importantDate;