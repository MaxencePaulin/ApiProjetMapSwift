const express = require('express');
const router = express.Router();
const { getAllUsers, addUser, updateUser } = require('../Controllers/user-controller.js');

// Read all users
router.get('/', getAllUsers);
// Add one user
router.post('/', addUser);
// Update one user
router.put('/:id', updateUser);

module.exports = router;