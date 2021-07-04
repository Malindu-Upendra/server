const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const tempImportantDatesSchema = Schema({
    dates: {
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    approval:{
        type:String,
        default:'Not Approved'
    }
});

const tempImportantDate= mongoose.model('tempImportantDates', tempImportantDatesSchema);
module.exports = tempImportantDate;