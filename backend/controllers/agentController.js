const Agent = require("../models/agentModel");
exports.getAgentByCredentials = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const agent = await Agent.getByCredentials(username, password);

    if (!agent) {
      return res
        .status(404)
        .json({ error: "Agent not found or incorrect credentials" });
    }

    res.json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addAgent = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required" });
    }

    // Check if email already exists
    const existingAgent = await Agent.getByEmail(email);
    if (existingAgent) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const result = await Agent.create(username, email, password);
    res.json({ message: "Agent created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
