const express = require("express");

const router = express.Router();

const {
    sendMessage
} = require("../controllers/contactController");

// POST Request
router.post("/", sendMessage);

module.exports = router;