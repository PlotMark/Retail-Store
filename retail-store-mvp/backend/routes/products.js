const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const router = express.Router();
router.get('/', auth, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
router.post('/', auth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});
router.put('/:id', auth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});
router.delete('/:id', auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Product deleted' });
});
module.exports = router;