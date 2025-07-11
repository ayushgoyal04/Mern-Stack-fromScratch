// This layer is for routing logic only — no DB code here
// Delegates to the service layer


// import user model

const UserService = require('../services/userService');
const logService = require('../services/logService');

// get all active users

async function getAllUsers(req, res) {
    try {
        const users = await UserService.getAllUsers();
        await logService.createLog({ message: `Fetched all users`, level: 'info' });
        res.status(200).json({ success: true, data: users, message: "Users fetched successfully" });
    } catch (err) {
        await logService.createLog({ message: `Error fetching users: ${err.message}`, level: 'error' });
        res.status(500).json({ success: false, message: "Error fetching users", error: err.message });
    }
}

// create a new user
async function createUser(req, res) {
    try {
        const { firstname, lastname, email } = req.body;
        const user = await UserService.createUser({ firstname, lastname, email });
        await logService.createLog({ message: `Created user: ${user.id}`, level: 'info' });
        res.status(201).json({ success: true, data: user, message: "User created successfully" });
    } catch (err) {
        await logService.createLog({ message: `Error creating user: ${err.message}`, level: 'error' });
        res.status(500).json({ success: false, message: "Error creating user", error: err.message });
    }
}

// edit a user
async function editUser(req, res) {
    try {
        const id = req.params.id;
        const { firstName, lastName, email } = req.body;
        const updatedUser = await UserService.updateUser(id, { firstName, lastName, email });
        await logService.createLog({ message: `Updated user: ${id}`, level: 'info' });
        res.status(200).json({ success: true, data: updatedUser, message: "User updated successfully" });
    } catch (err) {
        await logService.createLog({ message: `Error updating user: ${err.message}`, level: 'error' });
        res.status(500).json({ success: false, message: "Error updating user", error: err.message });
    }
}

// soft delete user
async function softDeleteUser(req, res) {
    try {
        const id = req.params.id;
        const deletedUser = await UserService.softDeleteUser(id);
        await logService.createLog({ message: `Soft deleted user: ${id}`, level: 'warn' });
        res.status(200).json({ success: true, data: deletedUser, message: "User deleted (soft) successfully" });
    } catch (err) {
        await logService.createLog({ message: `Error deleting user: ${err.message}`, level: 'error' });
        res.status(500).json({ success: false, message: "Error deleting user", error: err.message });
    }
}

module.exports = { getAllUsers, createUser, softDeleteUser, editUser };
