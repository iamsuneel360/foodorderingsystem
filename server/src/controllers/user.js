const User = require("../models/user");
const registerNewUser = async (req, res) => {
  await User.create(req.body);
  res.json({
    msg: "register successfully",
  });
};

module.exports = { registerNewUser };
