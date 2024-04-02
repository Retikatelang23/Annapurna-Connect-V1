// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const router = require("express").Router();
const Product = require('../models/product');

// Route to add a product
router.post('/', async (req, res) => {
  try {
    // Log the req object before making the API call
    console.log('Request object:', req.body);
    const { productname, quantityInKg, priceperKg, entryData, expiryDate, productImage } = req.body;
    const product = new Product({ productname, quantityInKg, priceperKg, entryData, expiryDate, productImage });
    console.log('Product Object', product.productname);
    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product' });
  }
});

module.exports = router;
