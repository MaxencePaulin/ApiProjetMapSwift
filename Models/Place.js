const mongoose = require('mongoose');

/*
 * id primary key autoincrement
 * name string
 * longitude float
 * latitude float
 * type string
 * description string
 * peopleInside Array[User]
 */

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    peopleInside: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        required: false,
    }
});

module.exports = mongoose.model('Place', placeSchema);