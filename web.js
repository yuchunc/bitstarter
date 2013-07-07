var express = require('express');
var fs = require('fs');
var buffer = new Buffer(16);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  result = buffer.toString(fs.readFileSync("index.html"));

  response.send(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
