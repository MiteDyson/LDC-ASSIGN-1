const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { encrypt } = require("../utils/cryptoUtils");
// const User = require("../models/User");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check for user
    let user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    // Return JWT
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
exports.register = async (req, res) => {
  const { username, password, fullName, aadhaarNumber } = req.body;
  try {
    let user = await User.findOne({ where: { username } });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const encryptedAadhaar = encrypt(aadhaarNumber);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({
      username,
      password: hashedPassword,
      fullName,
      aadhaarNumber: encryptedAadhaar,
    });

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
