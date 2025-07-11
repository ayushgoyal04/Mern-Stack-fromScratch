const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    dateCreated: { type: Date, default: Date.now },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
