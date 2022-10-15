const express = require('express');
const controller = require('../controllers/mainController');
const router = express.Router();

//GET /main/about: send all stories to the user
router.get('/about', controller.about);

//GET /main/contact: send all stories to the user
router.get('/contact', controller.contact);

module.exports = router;