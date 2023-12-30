const express = require("express");
const { getMessages, postMessage } = require("../controllers/messages");

const router = express.Router();

router.route("/").get(getMessages).post(postMessage);

module.exports = router;
