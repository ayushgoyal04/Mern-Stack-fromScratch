const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

const hashPassword = (password) => bcrypt.hash(password, 10);
const comparePasswords = (input, hash) => bcrypt.compare(input, hash);

module.exports = { generateToken, hashPassword, comparePasswords };
