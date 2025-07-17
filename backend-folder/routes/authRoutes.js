const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: "Email already used" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ msg: "Registered Successfully" });
});

// 🔥 login route lo token create cheyyi
// 🔐 Only allow fixed admin
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const adminEmail = "admin@gayathri.com";
  const adminPassword = "admin123";

  // Check email
  if (email !== adminEmail) {
    return res.status(401).json({ msg: "Only admin can login!" });
  }

  // Check password
  if (password !== adminPassword) {
    return res.status(401).json({ msg: "Invalid admin password" });
  }

  // Create token manually (no DB)
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

  // Send token and admin info
  res.json({
    msg: "Admin login success",
    token,
    username: "admin",
    email: adminEmail,
  });
});


module.exports = router;
