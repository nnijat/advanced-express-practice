`use strict`

const { getDatabase } = require("../dbConfig");

const collectionName = 'vehicles';

exports.list = function list(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, vehicles) {
        let enableVehicles = vehicles.filter(v => v.isActive != false)
        response.json(enableVehicles);
    });
}

exports.show = function show(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, vehicles) {
        let vehicle = vehicles.find(v => v._id == request.params.id);
        response.json(vehicle);
    });
}

exports.create = function create(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, vehicles) {
        let vehicleBody = request.body;
        vehicles.push(vehicleBody);
        response.json(vehicles);
    });
}

exports.update = function update(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, vehicles) {
        let vehicle = vehicles.find(v => v._id == request.params.id);
        vehicle.model = request.body.model;
        response.json(vehicle);
    });
}

exports.remove = function remove(request, response) {
    let db = getDatabase();
    const collection = db.collection('collectionName');
    let found = collection.find({});
    found.toArray(function (err, vehicles) {
        let vehicle = vehicles.find(v => v._id == request.params.id);
        vehicle.isActive = false;
        response.send(vehicle);
        console.log("Target item has been deleted");
    });
}