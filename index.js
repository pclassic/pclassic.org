const express = require('express');
const app = express();
require('./app/init')(app);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
