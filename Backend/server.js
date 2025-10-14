const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user"); // 👈 import route

dotenv.config();

const app = express();
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Lỗi MongoDB:", err));

// Đăng ký route
app.use("/users", userRoutes); // 👈 đường dẫn quan trọng

// Khởi động server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server chạy tại http://localhost:${PORT}`));
