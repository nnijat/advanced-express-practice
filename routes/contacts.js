`use strict`
const express = require('express');
const router = express.Router();
let contacts = require('../dataFolder/contacts');

// contacts
router.get('/contacts', (req, res) => {
    res.json(contacts)
})

router.get("/contacts/:id", (req, res) => {
    let contactsId = contacts.find(c => c._id == req.params.id);
    res.json(contactsId);
});

router.post('/contacts', (req, res) => {
    let contactBody = req.body;
    contacts.push(contactBody);
    res.json(contacts);
});

module.exports = router;
