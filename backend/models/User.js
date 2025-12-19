const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  aadhaarNumber: { type: String, required: true }, // Encrypted string
});

module.exports = mongoose.model("User", UserSchema);
