// model for the logs
const mongoose = require('mongoose');
const LogSchema = new mongoose.Schema({
    message: String, // The log message
    level: {
        type: String,
        enum: ['info', 'warn', 'error'],
        default: 'info'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
const Log = mongoose.model('Log', LogSchema);
module.exports = Log;
