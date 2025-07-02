const User = require('./users');
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  accessLevel: { type: String, default: 'super' }
});

module.exports = User.discriminator('Admin', adminSchema);
