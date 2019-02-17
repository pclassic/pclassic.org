const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./routes');

module.exports = function(app) {
  app.disable('x-powered-by');
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(logger('dev'));

  app.set('views', `${__dirname}/views`);
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
  }));
  app.set('view engine', '.hbs');

  app.use('/', routes);

  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    console.error(err);
    err.status = err.status || 500;
    res.status(err.status).render('error', {
      error: err
    });
  });
};
