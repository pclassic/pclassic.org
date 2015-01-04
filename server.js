var express = require('express');

var app = express();
require('./app/init')(app);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
