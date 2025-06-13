const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce');

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
