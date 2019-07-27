`use strict`
const { getDatabase } = require("../dbConfig");

const collectionName = 'products';

exports.list = function (request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, products) {
        let enableComments = products.filter(c => c.isActive != false);
        response.json(enableComments)
    });
}

exports.show = function show(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, products) {
        let product = products.find(p => p._id == request.params.id);
        response.json(product);
    });
}

exports.create = function create(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, products) {
        let productBody = request.body;
        products.push(productBody);
        response.json(products);
    });
}

exports.update = function update(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, products) {
        let product = products.find(p => p._id == request.params.id);
        product.name = request.body.name;
        response.json(product);
    });
}

exports.remove = function remove(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, products) {
        let product = products.find(p => p._id == request.params.id);
        product.isActive = false;
        response.send(product);
        console.log("Target item has been deleted");
    });
}