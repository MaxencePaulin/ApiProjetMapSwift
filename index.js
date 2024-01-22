require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import de routes
const userRoutes = require('./Routes/user-router.js');
const placeRoutes = require('./Routes/place-router.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    dbName: 'MYF',
}).then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error(err));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/place', placeRoutes);
app.get('/', (req, res) => res.send('Bienvenue sur une API de test pour un projet !'));

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
