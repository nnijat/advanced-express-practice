`use strict`

let vehicles = require('../dataFolder/vehicles');


exports.list == function list(request, response) {
    response.json(vehicles);
}

exports.show == function show(request, response) {
    let vehicle = vehicles.find(v => v._id == request.params.id);
    response.json(vehicle);
}

exports.create == function create(request, response) {
    let vehicleBody = request.body;
    vehicles.push(vehicleBody);
    response.json(vehicles);
}

exports.update == function update(request, response) {
    let vehicle = vehicles.find(v => v._id === request.params.vehiclesId);
    vehicle.make = body.make;
    response.json(vehicle);
}

exports.remove == function remove(request, response) {
    let vehicle = vehicles.find(v => v._id === request.params.vehiclesId);
    vehicle.isActive = false;
    response.send("Target Deleted")

}




/*
exports.list == function list(request, response) {
    return response.json([]);
}
exports.show == function show(request, response) {
    return response.json({ theId: request.params.id });
}
exports.create == function create(request, response) {
    return response.json([]);
}
exports.update == function update(request, response) {
    return response.json({ theId: request.params.id });
}
exports.remove == function remove(request, response) {
    return response.json([]);
}
*/