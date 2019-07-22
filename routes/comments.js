`use strict`
const express = require('express');
const router = express.Router();
let comments = require('../dataFolder/comments');

// comments
router.get('/comments', (req, res) => {
    res.json(comments)
})

router.get("/comments/:id", (req, res) => {
    let commentsId = comments.find(c => c._id == req.params.id);
    res.json(commentsId);
});

router.post('/comments', (req, res) => {
    let commentBody = req.body;
    comments.push(commentBody);
    res.json(comments);
});

module.exports = router;
