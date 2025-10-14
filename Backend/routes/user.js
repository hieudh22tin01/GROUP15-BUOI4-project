// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// ✅ Route test
router.get("/test", (req, res) => {
  res.send("User routes hoạt động!");
});

// ✅ Lấy danh sách người dùng
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Thêm người dùng mới
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; // 👈 phải có dòng này
