`use strict`
const mongoose = require("mongoose");

let vehicleSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String
});

let Vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = Vehicle;
