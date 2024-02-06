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
    const userDetails = await User.findOne({ email: req.body.email });

    if (userDetails) {
      const match = await bcrypt.compare(
        req.body.password,
        userDetails.password
      );

      if (match) {
        const token = jwt.sign({ email: req.body.email }, "shhhhh");
        res.json({
          userDetails,
          msg: "Login success",
          token,
        });
      } else {
        // Provide a generic error message for incorrect password
        res.status(401).json({
          msg: "Incorrect email or password",
        });
      }
    } else {
      // Provide a generic error message for invalid email
      res.status(401).json({
        msg: "Incorrect email or password",
      });
    }
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};

module.exports = { registerNewUser, loginUser };
