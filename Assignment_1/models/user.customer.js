const User = require('./users');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  shippingAddress: String
});

module.exports = User.discriminator('Customer', customerSchema);

