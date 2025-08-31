const express = require('express');
const Customer = require('../models/Customer');
const auth = require('../middleware/auth');
const router = express.Router();
// Get all customers
router.get('/', auth, async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});
// Add customer
router.post('/', auth, async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
});
// Update customer
router.put('/:id', auth, async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(customer);
});
// Delete customer
router.delete('/:id', auth, async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Customer deleted' });
});
module.exports = router;