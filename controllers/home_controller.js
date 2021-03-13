const User = require("../models/user");

// renders home page
module.exports.home = function(req, res, next) {
  // let user = User.find({});
  return res.render('home', { title: 'Shop Now' });
}

module.exports.cart = function (req, res, next) {
  // let user = User.find({});
  return res.render("cart", { title: "Shop Now" });
};