var express = require('express');
var router = express.Router();

// require controller
var homeController = require('../controllers/home_controller');

/* GET home page. */
router.get('/', homeController.home);

module.exports = router;
