const User = require("../models/user");
const registerNewUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(403).json({
        msg: "email number already exist",
      });
    }
    await User.create(req.body);
    res.json({
      msg: "registered successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerNewUser };
