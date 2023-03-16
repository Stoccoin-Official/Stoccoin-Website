// server/routes/stockRoutes.js

const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const { symbol, name, price } = req.body;

  try {
    let stock = new Stock({
      symbol,
      name,
      price,
    });

    stock = await stock.save();

    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
