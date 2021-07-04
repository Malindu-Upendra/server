const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const workShopSchema = Schema({

    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    wconductors:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    flyer:{
        type: String,
        required:true
    },
    cloudinaryID:{
        type:String,
        required:true
    },
    approval:{
        type:String,
        default:'Not Approved'
    }
});

const workshops = mongoose.model('workshops', workShopSchema);
module.exports =workshops;