const { User } = require('../Models/index.js');

// Read all users from mongoDB
exports.getAllUsers = async () => {
    try {
        const users = await User.find().exec();
        return users;
    } catch (err) {
        throw err;
    }
};

// Add one user to mongoDB
exports.addUser = async (user) => {
    try {
        console.log('user', user);
        const newUser = new User(user);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (err) {
        throw err;
    }
};

// Update one user by id in mongoDB
exports.updateUser = async (id, user) => {
    try {
        const userAfterUpdate = await User.findByIdAndUpdate(id, user, { new: true }).exec();
        console.log('user after update', userAfterUpdate);
    } catch (err) {
        throw err;
    }
};