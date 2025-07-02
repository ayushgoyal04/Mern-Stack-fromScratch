const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    level: String, // e.g., 'info', 'error', 'warn'
    message: String, // The log message
    timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Log', logSchema);
