const express = require("express");
const router = express.Router();
const { createMessage } = require("../controllers/contactController");

router.post("/", createMessage);

module.exports = router;
