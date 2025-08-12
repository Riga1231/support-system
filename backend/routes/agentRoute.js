const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

// POST - Get agent by username & password (login)
router.post("/login", agentController.getAgentByCredentials);

// POST - Create a new agent
router.post("/", agentController.addAgent);

module.exports = router;
