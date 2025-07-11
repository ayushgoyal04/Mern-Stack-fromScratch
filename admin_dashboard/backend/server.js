// Entry point for the backend server
const connectDB = require('./config/database');
const User = require('./models/users');
const express = require('express');

const cors = require('cors');
const errorMiddleware = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
const logRoutes = require('./routes/logRoutes');
const app = express();

// Connect to database
const connectDb = async () => {
    await connectDB();
};
connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/logs', logRoutes);

// Healthcheck endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

// Error middleware (should be last)
app.use(errorMiddleware);

// Start server
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
