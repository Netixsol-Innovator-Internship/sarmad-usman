require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const setupSwagger = require('./docs/swagger');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Connect to the database
connectDB();

// ✅ CORS middleware BEFORE routes
const corsOptions = {
  origin: 'http://localhost:5173', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.use('/api/users', authRoutes);
app.use('/api/tasks', taskRoutes);

// Setup Swagger UI documentation route
setupSwagger(app);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
