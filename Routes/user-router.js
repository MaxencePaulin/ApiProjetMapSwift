const express = require('express');
const router = express.Router();
const { getAllUsers, addUser } = require('../Controllers/user-controller.js');

// Read all users
router.get('/', getAllUsers);
// Add one user
router.post('/', addUser);

module.exports = router;