var config = require('../../config/config');

exports.index = function(req, res) {
  return res.render('about');
};

exports.page = function(req, res) {
  if (config.pages.indexOf(req.params.page) > -1) {
    return res.render(req.params.page);
  } else {
    return res.redirect('/');
  }
};
