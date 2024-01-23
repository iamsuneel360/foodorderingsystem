const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(403).json({
        msg: "email number already exist",
      });
    }
    const hasPass = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hasPass;
    await User.create(req.body);
    res.json({
      msg: "registered successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const userDetail = await User.findOne({ email: req.body.email });
    if (userDetail) {
      const match = await bcrypt.compare(
        req.body.password,
        userDetail.password
      );
      if (match) {
        const token = jwt.sign({ email: req.body.email }, "shhhhh");
        res.json({
          msg: "Login Success",
          token,
        });
      } else {
        res.json({
          msg: "Password Do Not Match",
        });
      }
    } else {
      res.status(403).json({
        msg: "Email not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerNewUser, loginUser };
