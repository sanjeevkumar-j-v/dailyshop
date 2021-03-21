var express = require('express');
var router = express.Router();
var passport = require("passport");


var homeController = require("../controllers/home_controller");
var userController = require("../controllers/users_controller");

/* GET home page. */
router.get('/', homeController.home);
router.get("/cart", passport.checkAuthentication, homeController.cart);
router.get("/cart/add/:id", homeController.addToCart);
router.get("/cart/remove/:id", homeController.removeFromCart);
router.get("/sign-up", userController.signUp);
router.use('/users', require('./user'));
router.use("/product", require("./product"));

module.exports = router;