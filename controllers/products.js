`use strict`

let products = require('../dataFolder/products');

exports.list = function list(request, response) {
    let enableProducts = products.filter(p => p.isActive != false);
    response.json(enableProducts);
}

exports.show = function show(request, response) {
    let product = products.find(p => p._id == request.params.id);
    response.json(product);
}

exports.create = function create(request, response) {
    let productBody = request.body;
    products.push(productBody);
    response.json(products);
}

exports.update = function update(request, response) {
    let product = products.find(p => p._id == request.params.id);
    product.name = request.body.name;
    response.json(product);
}

exports.remove = function remove(request, response) {
    let product = products.find(p => p._id == request.params.id);
    product.isActive = false;
    response.send(product);
    console.log("Target item has been deleted");
}