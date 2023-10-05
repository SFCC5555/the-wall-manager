const mongoose = require('mongoose');

// Define the schema for the Message model
const MessageSchema = new mongoose.Schema({
    message: {
        type: String, // message field is of type String
        required: [true, 'Must provide a message'], // Field is required with custom error message
        trim: true // Remove whitespace from the beginning and end of the name
    },
    sign: {
        type: String, // sign field is of type String
        required: [true, 'Must provide a sign'], // Field is required with custom error message
        trim: true, // Remove whitespace from the beginning and end of the name
        maxlength: [30, 'Name cannot be more than 30 characters'], // Maximum length constraint with custom error message
    },
    font: {
        type: String, // font field is of type String
        required: [true, 'Must provide a font'], // Field is required with custom error message
        trim: true, // Remove whitespace from the beginning and end of the name
    },
    color: {
        type: String, // color field is of type String
        required: [true, 'Must provide a color'], // Field is required with custom error message
        trim: true, // Remove whitespace from the beginning and end of the name
    }
});

// Create a model named 'Message' using the MessageSchema
module.exports = mongoose.model('Message', MessageSchema);