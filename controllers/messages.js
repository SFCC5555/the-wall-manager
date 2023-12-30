const Message = require("../models/Message");

// Controller function to retrieve the messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({}); // Find all the message documents

    res.status(200).json({ messages });
  } catch (error) {
    // Hide production errors details
    const errorMessage =
      process.env.NODE_ENV === "production"
        ? "Internal Server Srror"
        : error.message;
    res.status(500).json({
      msg: "Failed to get the messages",
      error: errorMessage,
    });
  }
};

// Controller function to post a new message
const postMessage = async (req, res) => {
  try {
    const { message, sign, font, color } = req.body;

    if (!message || !sign || !font || !color) {
      return res
        .status(400)
        .send("All fields are required: message, sign, font, color");
    }

    const newMessage = new Message({ message, sign, font, color });
    await newMessage.save();

    // send controled response
    res.status(201).json({
      msg: "New message successfully posted",
      message: {
        id: newMessage._id,
        content: newMessage.message,
        author: newMessage.sign,
      },
    });
  } catch (error) {
    // Hide production errors details
    const errorMessage =
      process.env.NODE_ENV === "production"
        ? "Internal Server Srror"
        : error.message;
    res.status(500).json({
      msg: "Failed to post a new message",
      error: errorMessage,
    });
  }
};

module.exports = {
  getMessages,
  postMessage,
};
