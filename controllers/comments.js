`use strict`
let CommentModel = require("../models/comments");

exports.list = function list(request, response) {
    CommentModel.find((e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.show = function show(request, response) {
    CommentModel.findById(request.params.id, (e, v) => {
        if (e) return console.log(e)
        return response.json(v);
    });
}

exports.create = function create(request, response) {
    let newComment = new CommentModel(request.body);
    newComment.save(() => {
        return response.json(newComment);
    });
}

/*
*TODO:
* Update update and remove fucntion with mongoose
*/

exports.update = function update(request, response) {
    let comment = comments.find(c => c._id == request.params.id);
    comment.body = request.body.body;
    response.json(comment);
}

exports.remove = function remove(request, response) {
    let comment = comments.find(c => c._id == request.params.id);
    comment.isActive = false;
    response.send(comment);
    console.log("Target item has been deleted");
}