`use strict`

const { getDatabase } = require("../dbConfig");

const collectionName = 'contacts';

exports.list = function list(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, contacts) {
        let enableContacts = contacts.filter(c => c.isActive != false)
        response.json(enableContacts);
    });
}

exports.show = function show(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, contacts) {
        let contact = contacts.find(c => c._id == request.params.id);
        response.json(contact);
    });
}

exports.create = function create(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, contacts) {
        let contactBody = request.body;
        contacts.push(contactBody);
        response.json(contacts);
    });
}

exports.update = function update(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, contacts) {
        let contact = contacts.find(c => c._id == request.params.id);
        contact.occupation = request.body.occupation;
        response.json(contact);
    });
}

exports.remove = function remove(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, contacts) {
        let contact = contacts.find(c => c._id == request.params.id);
        contact.isActive = false;
        response.send(contact)
        console.log("Target item has been deleted");
    });
}