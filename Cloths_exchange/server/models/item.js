const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: String,
  brand: String,
  size: String,
  condition: String,
  color: String,
  material: String,
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema);
