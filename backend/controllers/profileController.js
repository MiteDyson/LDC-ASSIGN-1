const User = require("../models/User");
const { decrypt } = require("../utils/cryptoUtils");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    const decryptedAadhaar = decrypt(user.aadhaarNumber);

    res.json({
      username: user.username,
      fullName: user.fullName,
      aadhaarNumber: decryptedAadhaar,
    });
  } catch (err) {
    res.status(500).send("Error fetching profile");
  }
};
