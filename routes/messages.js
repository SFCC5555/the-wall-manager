const express = require('express');
const { getMessages, postMessage } = require('../controllers/messages'); // Import controller functions

const router = express.Router(); // Create an instance of an Express router

// Define route handling for the root path ('/'), supporting GET and PATCH methods
router.route('/')
    .get(getMessages)     // Attach the getMessages controller function to the GET request
    .post(postMessage); // Attach the postMessage controller function to the POSTrequest

module.exports = router; // Export the router to make it available for other modules