require("dotenv").config();
const mysql = require("mysql2");

// Create a pool connection
const pool = mysql.createPool({
  host: process.env.DB_HOST, // from .env
  user: process.env.DB_USER, // from .env
  password: process.env.DB_PASS, // from .env
  database: process.env.DB_NAME, // from .env
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10, // max number of connections
  queueLimit: 0, // unlimited queued requests
});

// Export the pool
module.exports = pool.promise(); // allows using async/await
