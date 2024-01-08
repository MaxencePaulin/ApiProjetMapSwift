const userService = require('../Services/user-service.js');

// Read all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Add one user
exports.addUser = async (req, res) => {
    try {
        console.log('req', req.body);
        const user = await userService.addUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};