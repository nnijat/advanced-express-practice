`use strict`
const mongoose = require("mongoose");

let contactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String,
});

let Contact = mongoose.model('contact', contactSchema);
module.exports = Contact;
