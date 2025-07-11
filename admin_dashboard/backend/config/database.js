const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try{
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
        console.log(`Backend URL: http://localhost:${PORT}`);
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1); // Exit the process with failure
    }

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
        process.exit(0);
    });
};
module.exports = connectDB;
