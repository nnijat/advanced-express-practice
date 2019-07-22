`use strict`
const express = require('express');
const router = express.Router();
let products = require('../dataFolder/products');

// products
router.get('/products', (req, res) => {
    res.json(products)
})

router.get("/products/:id", (req, res) => {
    let productsId = products.find(p => p._id == req.params.id);
    res.json(productsId);
});

router.post('/products', (req, res) => {
    let productBody = req.body;
    products.push(productBody);
    res.json(products);
});

module.exports = router;

