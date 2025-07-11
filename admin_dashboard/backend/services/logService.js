// Service for log operations
const Log = require('../models/logs');

// Create a log entry
async function createLog({ message, level = 'info' }) {
    const log = new Log({ message, level });
    return await log.save();
}

// Get all logs
async function getAllLogs() {
    return await Log.find().sort({ timestamp: -1 });
}

module.exports = { createLog, getAllLogs };
