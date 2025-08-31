const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'mvp_of_a_crm_of_a_retail_shop_for_shivang_khungar';
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password'); // exclude password
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;