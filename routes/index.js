var express = require('express');
var router = express.Router();

var homeController = require("../controllers/home_controller");
var userController = require("../controllers/users_controller");

/* GET home page. */
router.get('/', homeController.home);
router.get("/sign-up", userController.signUp);
router.use('/users/', require('./user'));

module.exports = router;