`use strict`
const express = require('express');
const router = express.Router();
const { list, show, create } = require('../controllers/vehicles')

router.get('/vehicles', list)

router.get("/vehicles/:id", show)

router.post('/vehicles', create)

//router.put('/vehicles', )

//router.delete('/vehicles', )


module.exports = router;