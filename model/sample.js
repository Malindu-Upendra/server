const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
});

const Sample = mongoose.model("sample", sampleSchema);
module.exports = Sample