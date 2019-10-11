const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/agenda-front'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/agenda-front/index.html');
});

app.listen(4200);
