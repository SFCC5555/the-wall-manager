const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Must provide a message"],
    trim: true,
  },
  sign: {
    type: String,
    required: [true, "Must provide a sign"],
    trim: true,
    maxlength: [30, "Sign cannot be more than 30 characters"],
  },
  font: {
    type: String,
    required: [true, "Must provide a font"],
    trim: true,
  },
  color: {
    type: String,
    required: [true, "Must provide a color"],
    trim: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
