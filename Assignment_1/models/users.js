const mongoose = require("mongoose");
const baseOptions = {
discriminatorKey: "role", // This field tells Mongoose the type (Admin, Customer, etc.)
collection: "users",
timestamps: true
};
const userSchema = new mongoose.Schema({
name: String,
email: String
}, baseOptions);

module.exports = mongoose.model("User", userSchema);
