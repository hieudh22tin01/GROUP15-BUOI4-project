const mongoose = require("mongoose");

// Định nghĩa Schema đúng cách
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

// Xuất model
module.exports = mongoose.model("User", userSchema);
