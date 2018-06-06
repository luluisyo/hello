var express = require('express');
var path = require('path');
var app = express();

// port
app.set('port', (process.env.PORT || 8080));

// view engine setup
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// public
app.use(express.static(__dirname + '/public'));

// open index.html
app.get('/', function(request, response) {
  response.render('index.html');
});

// redirect all routes to index.html
app.get('/*', function(request, response) {
  response.render('index.html');
});

// run server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
