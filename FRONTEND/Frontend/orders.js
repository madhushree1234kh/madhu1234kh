const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const order = req.body;
  console.log('New Order:', order);  // You can store this in DB if needed
  res.status(201).json({ message: 'Order received' });
});

module.exports = router;
