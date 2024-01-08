require('dotenv').config();
const mongoose = require('mongoose');
const { Place } = require('../Models/index.js');

const places = [
    new Place({
        name: 'La Cafeteria',
        latitude: 47.64355899156118,
        longitude: 6.837952765647923,
        type: 'cafeteria'
    }),
    new Place({
        name: 'Le test',
        latitude: 47.643916437387006,
        longitude: 6.840182218304971,
        type: 'restaurant'
    }),
    new Place({
        name: 'Le test2',
        latitude: 47.64307685111789,
        longitude: 6.841081295290632,
        type: 'restaurant'
    }),
    new Place({
        name: 'ABII',
        latitude: 47.64264783669334,
        longitude: 6.839482698717756,
        type: 'inconnu'
    }),
]

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    dbName: 'MYF',
}).then(() => {
    console.log('Connected to MongoDB!');
    // Save places in MongoDB
    Place.insertMany(places).then(() => console.log('Places saved!'))
})
.catch(err => console.error(err));





