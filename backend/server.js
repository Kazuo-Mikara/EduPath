// server.js
const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./config/database');

// 💡 Import the courseRoutes function
const createCourseRouter = require('./routes/course.route');

const app = express();
app.use(cors());
app.use(express.json()); // Optional: for handling JSON body payloads

let db;
const PORT = 3000;

// db connection
connectToDb((err) => {
    if (!err) {
        db = getDb();

        // 1. Initialize the Course Router, passing the database object
        const courseRouter = createCourseRouter(db);

        // 2. Register the router with a base path
        // All routes in courseRoutes.js will be prefixed with '/courses'
        app.use('/courses', courseRouter);

        // 3. Start the server
        app.listen(PORT, () => {
            console.log(`🚀 App is Listening on port ${PORT}`);
        });
    } else {
        console.error('❌ Could not connect to database:', err);
    }
});

// Any other core routes or app-level middleware can stay here
// For example:
// app.get('/status', (req, res) => res.send('Server is running'));