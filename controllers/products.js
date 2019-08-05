`use strict`
let ProductModel = require("../models/products");

exports.list = function list(request, response) {
    ProductModel.find((e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.show = function show(request, response) {
    ProductModel.findById(request.params.id, (e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.create = function create(request, response) {
    let newProduct = new ProductModel(request.body);
    newProduct.save(() => {
        return response.json(newProduct);
    });
}

/*
*TODO:
* Update update and remove fucntion with mongoose
*/

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