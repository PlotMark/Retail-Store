const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String },
  price: { type: Number, default: 0 },
  stock: { type: Number, default: 0 }
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);