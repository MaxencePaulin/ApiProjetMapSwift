const express = require('express');
const router = express.Router();
const { getAllPlaces, addUserToPeopleInside, removeUserToPeopleInside } = require('../Controllers/place-controller.js');

// Read all places
router.get('/', getAllPlaces);
// Add one user to peopleInside mongodb
router.put('/:idPlace', addUserToPeopleInside);
// Remove one user to peopleInside mongodb
router.delete('/:idPlace', removeUserToPeopleInside);

module.exports = router;