// routes/user.routes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Course = require('../models/course.model'); // Needed for populating course details

// --- Authentication Placeholder (Replace with actual auth logic) ---
// For demonstration, we'll assume you have a way to get the logged-in user's ID
// e.g., from a JWT token after successful login.
const authenticateUser = (req, res, next) => {
    // In a real app, you'd verify a token and attach the user to req.user
    // For now, let's mock a user ID for testing
    req.user = { _id: '60c72b2f9b1e8a3a4c5d6e7f' }; // Replace with actual logged-in user ID
    if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
    }
    next();
};
// --- End Authentication Placeholder ---


// GET /api/users/dashboard - Fetch user's dashboard data
router.get('/dashboard', authenticateUser, async (req, res) => {
    try {
        const userId = req.user._id;

        // Find the user, and populate course details and mentor info
        const user = await User.findById(userId)
            .populate('mentorId', 'firstName lastName email') // Populate mentor details
            .populate({
                path: 'enrolledCourses.courseId', // Populate details for each enrolled course
                select: 'title instructor difficulty' // Select fields from the Course model
            });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Separate courses by status for clearer frontend display
        const dashboardData = {
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                mentor: user.mentorId // Mentor details populated here
            },
            enrolledCourses: [],
            finishedCourses: [],
            pendingCourses: [],
            progressSummary: { // You might calculate this or store it in user doc
                totalCourses: user.enrolledCourses.length,
                completed: user.enrolledCourses.filter(e => e.status === 'finished').length,
                inProgress: user.enrolledCourses.filter(e => e.status === 'in-progress').length,
            }
        };

        // Process enrolledCourses to match the desired structure
        for (const enrollment of user.enrolledCourses) {
            const courseDetails = enrollment.courseId; // Populated course details

            const courseData = {
                courseId: enrollment.courseId._id,
                title: courseDetails.title,
                instructor: courseDetails.instructor,
                difficulty: courseDetails.difficulty,
                progress: enrollment.progress,
                status: enrollment.status,
                enrollmentDate: enrollment.enrollmentDate,
                finishedDate: enrollment.finishedDate
            };

            dashboardData.enrolledCourses.push(courseData);

            if (enrollment.status === 'finished') {
                dashboardData.finishedCourses.push(courseData);
            } else if (enrollment.status === 'pending' || enrollment.status === 'in-progress') {
                dashboardData.pendingCourses.push(courseData);
            }
        }

        res.json(dashboardData);

    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ message: 'Server error retrieving dashboard data' });
    }
});

// GET /api/users/:userId/mentor-view - Mentor view of a specific student's progress
router.get('/:userId/mentor-view', authenticateUser, async (req, res) => {
    try {
        const studentId = req.params.userId;
        const requestingMentorId = req.user._id; // Assuming the logged-in user is a mentor

        // Verify if the requesting user is a mentor and if they are assigned to this student
        const requestingUser = await User.findById(requestingMentorId);
        if (!requestingUser || requestingUser.role !== 'mentor') {
            return res.status(403).json({ message: 'Forbidden: Only mentors can access this data.' });
        }

        const student = await User.findById(studentId)
            .select('firstName lastName email enrolledCourses') // Select necessary fields
            .populate('enrolledCourses.courseId', 'title') // Populate course titles for readability
            .exec();

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Check if the logged-in mentor is assigned to this student
        if (student.mentorId && student.mentorId.toString() !== requestingMentorId) {
            return res.status(403).json({ message: 'Forbidden: You are not authorized to view this student\'s progress.' });
        }

        // Filter out courses that might not be relevant for mentor view if needed,
        // but typically mentors see all enrolled/finished/pending details.
        const mentorViewData = {
            studentName: `${student.firstName} ${student.lastName}`,
            studentEmail: student.email,
            courses: student.enrolledCourses.map(enrollment => ({
                courseTitle: enrollment.courseId.title,
                progress: enrollment.progress,
                status: enrollment.status,
                finishedDate: enrollment.finishedDate
            }))
        };

        res.json(mentorViewData);

    } catch (error) {
        console.error("Error fetching mentor view data:", error);
        res.status(500).json({ message: 'Server error retrieving mentor view data' });
    }
});

// --- Add other routes for login, sign-up, course creation, progress updates, etc. ---

module.exports = router;