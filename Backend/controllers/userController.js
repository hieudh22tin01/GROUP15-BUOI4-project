let users = [
  { id: 1, name: "Minh Hiếu", email: "hieu@example.com" },
  { id: 2, name: "Văn Khoa", email: "khoa@example.com" },
];

// GET: Lấy danh sách
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST: Thêm user
exports.createUser = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.json(newUser);
};

// PUT: Cập nhật user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE: Xóa user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.json({ message: "User deleted" });
};
