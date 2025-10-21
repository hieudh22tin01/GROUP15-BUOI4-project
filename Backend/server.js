const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Kết nối MongoDB Atlas
mongoose.connect('process.env.MONGO_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));


// 📥 POST - thêm user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.json(newUser);
});

// 📤 GET - lấy danh sách user
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
