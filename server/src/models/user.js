const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email: { type: String, unique: true, required: true },
  password: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
