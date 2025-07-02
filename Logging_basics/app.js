
// this si an example of 1st type of schema - flat schema
require('dotenv').config({ path: __dirname + '/.env' });

const connectDB = require('./config/database');
const mongoose = require('mongoose');
const Log = require('./models/logs');
// this si an example of 1st type of schema - flat schema
const run = async () => {
    try {
        // Connect to MongoDB (update the URI as needed)
        await connectDB();

        // const newLog = new Log({
        //     level: "info",
        //     message: "This is a test log message"
        // });
        const newLog = new Log({
            level: "error",
            message: "This is an error log message"
        });
        await newLog.save();
        console.log("Log saved successfully");
        // fetch and print all the logs
        const allLogs = await Log.find().sort({ timestamp: -1 });
        console.log("All Logs:", allLogs);
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};
run();
