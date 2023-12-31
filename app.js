const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");

const app = express();

// Configure allowed origins
const allowedOrigins = ["https://sfcc-the-wall.netlify.app"];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Middlewares

app.use(cors());
//app.use(cors(corsOptions)); // Apply CORS middleware with configured options
app.use(express.json()); // Parse JSON from request bodies
app.use("/api/v1/messages", require("./routes/messages")); // Define routes
app.use(notFound); // Handle 404 Not Found

// Start the server
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
