const express = require('express');
const pages = require('./pages');

function index (req, res) {
  return res.render('about');
};

function page(req, res) {
  if (pages.indexOf(req.params.page) > -1) {
    return res.render(req.params.page);
  } else {
    return res.redirect('/');
  }
};

const router = express.Router();
router.get('/', index);
router.get('/:page', page);

module.exports = router;
