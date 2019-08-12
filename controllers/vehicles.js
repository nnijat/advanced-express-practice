`use strict`
let VehicleModel = require("../models/vehicles");

exports.list = function list(request, response) {
    VehicleModel.find((e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.show = function show(request, response) {
    VehicleModel.findById(request.params.id, (e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.create = function create(request, response) {
    let newVehicle = new VehicleModel(request.body);
    newVehicle.save(() => {
        return response.json(newVehicle);
    });

}

/*
*TODO:
* Update update and remove fucntion with mongoose
*/

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