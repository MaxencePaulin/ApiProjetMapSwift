const express = require('express');
const router = express.Router();
const { getAllUsers, addUser, updateUser, getOneUser } = require('../Controllers/user-controller.js');

// Read one user
router.get('/:id', getOneUser);
// Update one user
router.put('/:id', updateUser);
// Read all users
router.get('/', getAllUsers);
// Add one user
router.post('/', addUser);

module.exports = router;