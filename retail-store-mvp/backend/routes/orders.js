const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth');
const router = express.Router();
router.get('/', auth, async (req, res) => {
  const orders = await Order.find().populate('customer').populate('items.product');
  res.json(orders);
});
router.post('/', auth, async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});
router.put('/:id', auth, async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
});
router.delete('/:id', auth, async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Order deleted' });
});
module.exports = router;