const User = require("../models/user");

// renders home page
module.exports.home = function(req, res, next) {
  // let user = User.find({});
  return res.render('home', { title: 'Flipkart' });
}