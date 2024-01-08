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
