const mongoose = require('mongoose');

// Define Product schema
const productSchema = new mongoose.Schema({
    productname: String,
    quantityInKg: Number,
    priceperKg: Number,
    entryData: { type: Date, default: Date.now },
    expiryDate: { type: Date, default: Date.now },
    productImage: String // Image data stored as BLOB
  });

  const Product = mongoose.model('Product', productSchema);

  module.exports = Product