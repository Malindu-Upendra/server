const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of admin side of website
const UserSchema = Schema({
    position: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;