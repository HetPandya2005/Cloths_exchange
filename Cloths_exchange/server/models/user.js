const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  preferences: Object,
  itemsLiked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  matchedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('User', userSchema);
