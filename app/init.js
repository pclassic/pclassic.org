var logger = require('morgan'),
    path = require('path'),
    config = require('../config/config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars');

module.exports = function(app) {
  app.disable('x-powered-by');
  app.set('views', path.join(config.appRoot, 'views'));
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(config.appRoot, 'views', 'layouts'),
    partialsDir: path.join(config.appRoot, 'views', 'partials')
  }));
  app.set('view engine', '.hbs');
  app.set('port', process.env.PORT || config.port || 3000);
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(logger('dev'));

  app.use('/files', express.static(config.root + '/public'));
  app.use('/', require('./routes'));

  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /*eslint-disable no-unused-vars */
  app.use(function(err, req, res, next) {
    console.error(err);
    err.status = err.status || 500;
    res.status(err.status).render('error', {
      error: err
    });
  });
  /*eslint-enable no-unused-vars */
};
