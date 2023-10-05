const Message = require('../models/Message'); // Import the Message model

// Controller function to retrieve the messages
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({}); // Find all the message documents
        
        res.status(200).json({ messages }); // Respond with the messages object
    } catch (error) {
        res.status(500).json({ msg: error }); // Handle server error
    }
};

// Controller function to post a new message
const postMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body) // Create a new message using the data in the request body.
        res.status(201).json({ message }) // Respond with the newly created message

    } catch (error) {
        res.status(500).json({msg:error}) // Handle server error
    }   
};

module.exports = {
    getMessages,
    postMessage,
};