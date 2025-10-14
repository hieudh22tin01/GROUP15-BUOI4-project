// controllers/userController.js
const user = require("../models/Users");

// GET /users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error("getUsers error:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

// POST /users
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Thiếu name hoặc email" });

    // optional: prevent duplicate email
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email đã tồn tại" });

    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "Thêm người dùng thành công", user: newUser });
  } catch (err) {
    console.error("createUser error:", err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

module.exports = { getUsers, createUser };
