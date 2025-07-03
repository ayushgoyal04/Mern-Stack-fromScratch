const connectDB = require('./config/database');
const empRoutes = require('./routes/empRoutes');
const express = require('express');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api', empRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Employee API');
});

// Port and IP
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1'; // Default IP

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
});
