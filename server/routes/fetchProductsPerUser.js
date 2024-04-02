const router = require("express").Router();
const axios = require('axios');
const Product = require('../models/product');

router.get("/", async (req, res) => {
    try {
        // Make a request to the third-party API
        //Get date from request
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products' });
    }
});

module.exports = router;
