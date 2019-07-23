`use strict`

let contacts = require('../dataFolder/contacts');

exports.list = function list(request, response) {
    let enableContacts = contacts.filter(c => c.isActive != false)
    response.json(enableContacts);
}

exports.show = function show(request, response) {
    let contact = contacts.find(c => c._id == request.params.id);
    response.json(contact);
}

exports.create = function create(request, response) {
    let contactBody = request.body;
    contacts.push(contactBody);
    response.json(contacts);
}

exports.update = function update(request, response) {
    let contact = contacts.find(c => c._id == request.params.id);
    contact.occupation = request.body.occupation;
    response.json(contact);
}

exports.remove = function remove(request, response) {
    let contact = contacts.find(c => c._id == request.params.id);
    contact.isActive = false;
    response.send(contact)
    console.log("Target item has been deleted");
}