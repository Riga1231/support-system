const db = require("../config/db");

const Agent = {
  // Get agent by username and password
  getByCredentials: async (username, password) => {
    const [rows] = await db.query(
      `SELECT * FROM agents WHERE username = ? AND password = ?`,
      [username, password]
    );
    return rows[0]; // return single agent or undefined
  },
  create: async (username, email, password) => {
    const [result] = await db.query(
      `INSERT INTO agents (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );
    return result;
  },
  getByEmail: async (email) => {
    const [rows] = await db.query(`SELECT * FROM agents WHERE email = ?`, [
      email,
    ]);
    return rows[0];
  },
};

module.exports = Agent;
