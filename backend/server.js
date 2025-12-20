const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db"); // Import from config
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Sync Database
const User = require("./models/User");
sequelize
  .sync()
  .then(() => console.log("PostgreSQL Connected and Models Synced"))
  .catch((err) => console.log("Database Error:", err));

// Import Controllers
const authController = require("./controllers/authController");
const profileController = require("./controllers/profileController");
const authMiddleware = require("./middleware/auth");

// Routes
app.post("/api/auth/register", authController.register);
app.post("/api/auth/login", authController.login);
app.get("/api/profile", authMiddleware, profileController.getProfile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
