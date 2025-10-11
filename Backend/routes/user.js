// routes/user.js

const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

// Định nghĩa API
router.get("/", getUsers);    // GET /users
router.post("/", createUser); // POST /users

module.exports = router;
