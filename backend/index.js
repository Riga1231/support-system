const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
const agentRoutes = require("./routes/agentRoute");

app.use("/agents", agentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
