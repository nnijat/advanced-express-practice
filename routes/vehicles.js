`use strict`
const express = require('express');
const router = express.Router();
let vehicles = require('../dataFolder/vehicles');

router.get('/vehicles', (req, res) => {
    res.json(vehicles)
})

router.get("/vehicles/:id", (req, res) => {
    let vehiclesId = vehicles.find(v => v._id == req.params.id);
    res.json(vehiclesId);
});

router.post('/vehicles', (req, res) => {
    let vehicleBody = req.body;
    vehicles.push(vehicleBody);
    res.json(vehicles);
});

module.exports = router;