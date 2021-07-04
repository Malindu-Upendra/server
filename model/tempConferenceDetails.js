const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const tempConferenceSchema = Schema({
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
    },
    approval:{
        type:String,
        default:'Not Approved'
    }
});

const temmpconference = mongoose.model('tempConferenceDetails', tempConferenceSchema);

module.exports = temmpconference;