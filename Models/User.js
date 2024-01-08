const mongoose = require('mongoose');

/*
 * id primary key autoincrement
 * firstName string
 * lastName string
 * biography string
 * phoneNumber string
 * email string
 * avatar string
 */

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    biography: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('User', userSchema);

