const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Updated path

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aadhaarNumber: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = User;
