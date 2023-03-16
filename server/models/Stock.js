// server/models/Stock.js

const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
