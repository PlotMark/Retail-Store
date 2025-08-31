const mongoose = require('mongoose');
const OrderItem = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  qty: { type: Number, default: 1 },
  price: { type: Number, default: 0 }
});
const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  items: [OrderItem],
  total: { type: Number, default: 0 },
  status: { type: String, enum: ['pending','completed','cancelled'], default: 'pending' }
}, { timestamps: true });
module.exports = mongoose.model('Order', OrderSchema);