const User = require("../models/User");
const { decrypt } = require("../utils/cryptoUtils");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const decryptedAadhaar = decrypt(user.aadhaarNumber); // Decrypt for client

    res.json({ ...user._doc, aadhaarNumber: decryptedAadhaar });
  } catch (err) {
    res.status(500).send("Error fetching profile");
  }
};
