// all the validation and db calls are here

const User = require('../models/users');

// get all active users
async function getAllUsers() {
    return await User.find({ isActive: true });
}

// create a new user with auto ncrement id
async function createUser({ firstname, lastname, email }) {
    // find the user with the highest _id
    const lastUser = await User.findOne().sort({ _id: -1 });
    const newId = lastUser ? lastUser._id + 1 : 1; // start from 1 if no users exist

    // create and save the new user
    const user = new User({ _id: newId, firstname, lastname, email, isActive: true, dateCreated: new Date() });
    return await user.save();
}

// update a user by id
async function updateUser(id, { firstName, lastName, email }) {
    // find user by _id and is active = true
    const user = await User.findOne({ _id: id, isActive: true })
    if (!user) {
        throw new Error("user not found for id " + id);
    }

    // update the fields
    if (firstName) user.firstname = firstName;
    if (lastName) user.lastname = lastName;
    if (email) user.email = email;

    // save the field
    await user.save();

    // return updated user
    return user;
}

// soft delete a user by id
async function softDeleteUser(id) {
    // Find user by _id and isActive: true
    const user = await User.findOne({ _id: id, isActive: true });
    if (!user) {
        throw new Error("User not found! The user is probably deactivated or the id is wrong=> id: " + id);
    }

    // Set isActive to false
    user.isActive = false;
    await user.save();
    return user;
}


module.exports = {
    getAllUsers,
    createUser,
    softDeleteUser,
    updateUser,
};
