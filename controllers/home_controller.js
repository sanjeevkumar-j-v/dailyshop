module.exports.home = function(req, res, next) {
  return res.render('index', { title: 'Flipkart' });
}