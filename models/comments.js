`use strict`
const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
    body: String,
});

let Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;