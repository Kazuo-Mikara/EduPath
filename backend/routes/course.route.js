// routes/courseRoutes.js
const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Export a function that takes the database connection as an argument
module.exports = (db) => {
    // Check if db is provided before defining routes that use it
    if (!db) {
        console.error("Database connection not provided to courseRoutes.");
        return router; // Return the router without defining routes
    }

    // 📚 GET /courses
    router.get('/', async (req, res) => {
        try {
            const courses = await db
                .collection('courses')
                .find()
                .sort({ partner: 1 })
                .toArray();

            return res.status(200).json(courses);
        } catch (err) {
            console.error('Error fetching courses:', err);
            return res.status(500).json({ error: 'Could not fetch the documents' });
        }
    });

    // You can add more course-related routes here, like:
    /*
    router.post('/', (req, res) => { ... });
    */
    // 🔍 GET /courses/:id - Fetch a single course by its MongoDB ID
    router.get('/:id', async (req, res) => {
        const id = req.params.id; // Get the ID from the URL parameter

        // 1. Validate if the ID is a valid MongoDB ObjectId format
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid Course ID format' });
        }

        let courseId;
        try {
            // Convert the string ID to a MongoDB ObjectId
            courseId = new ObjectId(id);
        } catch (err) {
            // This catches conversion errors, though isValid() should usually prevent it
            return res.status(400).json({ error: 'Invalid Course ID format during conversion' });
        }

        // 2. Query the database using the _id field
        try {
            const course = await db
                .collection('courses')
                .findOne({ _id: courseId }); // Use the ObjectId in the query

            if (!course) {
                // Return 404 if a document with that ID doesn't exist
                return res.status(404).json({ error: 'Course not found' });
            }

            // Return the found course
            return res.status(200).json(course);
        } catch (err) {
            console.error(`Error fetching course with ID ${id}:`, err);
            return res.status(500).json({ error: 'Could not fetch the document' });
        }
    });

    return router;
};