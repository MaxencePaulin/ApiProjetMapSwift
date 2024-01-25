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
        console.log('user after add', user)
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Update one user by id
exports.updateUser = async (req, res) => {
    try {
        console.log('update user', req.body);
        const user = await userService.updateUser(req.params.id, req.body);
        console.log('user after update', user)
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Read one user by id
exports.getOneUser = async (req, res) => {
    try {
        console.log('get one user', req.params.id);
        const user = await userService.getOneUser(req.params.id);
        console.log('user after get one', user)
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
}