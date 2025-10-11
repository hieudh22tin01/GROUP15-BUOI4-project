// controllers/userController.js

let users = [
  { id: 1, name: "Trần Nguyễn Minh Hiếu", email: "Hieu@gmail.com" },
  { id: 2, name: "Nguyễn Văn Khoa", email: "Khoa@gmail.com" }
];

// Lấy toàn bộ user
const getUsers = (req, res) => {
  res.json(users);
};

// Thêm user mới
const createUser = (req, res) => {
  const newUser = req.body;
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ message: "Thiếu name hoặc email" });
  }

  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json({ message: "Thêm người dùng thành công", user: newUser });
};

module.exports = { getUsers, createUser };
