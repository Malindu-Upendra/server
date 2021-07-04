const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const TemplateSchema = Schema({
    title: {
        type: String,
        required: true
    },
    paper:{
        type: String
    },
    cloudinaryID:{
        type: String
    }
});

const templates = mongoose.model('templates', TemplateSchema);

module.exports = templates;