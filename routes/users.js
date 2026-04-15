const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  email: String
}));

// GET /api/users — returns all users from MongoDB
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
