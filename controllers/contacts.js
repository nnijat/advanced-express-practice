`use strict`
let ContactModel = require("../models/contacts");

exports.list = function list(request, response) {
    ContactModel.find((e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.show = function show(request, response) {
    ContactModel.findById(request.params.id, (e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.create = function create(request, response) {
    let newProduct = new ContactModel(request.body);
    newProduct.save(() => {
        return response.json(newProduct);
    });
}

/*
*TODO:
* Update update and remove fucntion with mongoose
*/

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