// server.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/user"); // import router

app.use(express.json());

// Gắn router vào /users
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
