`use strict`

let vehicles = require('../dataFolder/vehicles');

exports.list = function list(request, response) {
    let enableVehicles = vehicles.filter(v => v.isActive != false)
    response.json(enableVehicles);
}

exports.show = function show(request, response) {
    let vehicle = vehicles.find(v => v._id == request.params.id);
    response.json(vehicle);
}

exports.create = function create(request, response) {
    let vehicleBody = request.body;
    vehicles.push(vehicleBody);
    response.json(vehicles);
}

exports.update = function update(request, response) {
    let vehicle = vehicles.find(v => v._id == request.params.id);
    vehicle.model = request.body.model;
    response.json(vehicle);
}

exports.remove = function remove(request, response) {
    let vehicle = vehicles.find(v => v._id == request.params.id);
    vehicle.isActive = false;
    response.send(vehicle);
    console.log("Target item has been deleted");
}