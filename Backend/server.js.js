// server.js
// server.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors()); // Cho phép React gọi API
app.use(express.json());

// Gắn router vào /users
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3001; // ✅ chỉ là số
app.listen(PORT, () => console.log(`✅ Server chạy tại http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("✅ Backend đang hoạt động!");
});

