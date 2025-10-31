// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load env vars early

const connectDB = require('./config/database'); // Import your db connection function

// Call connectDB before starting the server
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins (configure as needed for production)
app.use(express.json()); // Parse JSON bodies

// Define your routes here (e.g., authRoutes, userRoutes, courseRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js (continued)
// const userRoutes = require('./routes/user.routes');
const courseRoutes = require('./routes/course.route')
// ... other routes like courseRoutes, authRoutes

// app.use('/api/users', userRoutes);>
app.use('/api/courses', courseRoutes);
// ...