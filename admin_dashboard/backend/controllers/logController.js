// after every significant change in the controller a new log must be added here
// In your controllers, after every significant action (create, update, delete), create a log entry using your log model.
// The log should record action type, user, timestamp, and any relevant details.

const logService = require('../services/logService');

// Get all logs
async function getAllLogs(req, res) {
    try {
        const logs = await logService.getAllLogs();
        res.status(200).json({ success: true, data: logs, message: "Logs fetched successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error fetching logs", error: err.message });
    }
}

module.exports = { getAllLogs };
