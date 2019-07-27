`use strict`

const { getDatabase } = require("../dbConfig");

const collectionName = 'comments';

exports.list = function list(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, comments) {
        let enableComments = comments.filter(c => c.isActive != false);
        response.json(enableComments);
    });
}

exports.show = function show(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, comments) {
        let comment = comments.find(c => c._id == request.params.id);
        response.json(comment);
    });
}

exports.create = function create(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, comments) {
        let commentBody = request.body;
        comments.push(commentBody);
        response.json(comments);
    });
}

exports.update = function update(request, response) {
    let db = getDatabase();
    const collection = db.collection(collectionName);
    let found = collection.find({});
    found.toArray(function (err, comments) {
        let comment = comments.find(c => c._id == request.params.id);
        comment.body = request.body.body;
        response.json(comment);
    });
}

exports.remove = function remove(request, response) {
    let db = getDatabase();
    const collection = db.collection('comments');
    let found = collection.find({});
    found.toArray(function (err, comments) {
        let comment = comments.find(c => c._id == request.params.id);
        comment.isActive = false;
        response.send(comment);
        console.log("Target item has been deleted");
    });
}