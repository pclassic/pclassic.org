var express = require('express');
var landing = require('../controllers');

var router = express.Router();

router.get('/', landing.index);
router.get('/:page', landing.page);

module.exports = router;
