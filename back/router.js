const express = require('express');
const router = express.Router();

const mainController = require('./mainController');


router.get('/', mainController.homePage);
router.get('/moviesByName', mainController.moviesByName);
router.get('/random', mainController.random);
router.post('/addMovie', mainController.addMovie )
module.exports = router;