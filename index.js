var express = require('express');
var app = express();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.set('port', (process.env.PORT || 5000));


var url = process.env.MONGODB_URI;

// mongo middleware
app.use(function(req, resp, next){
	MongoClient.connect(url, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	  } else {
	    req.db = db;
	  }
	  next();
	});
});

app/

app.get('/', function(request, response) {
  response.json({
			test: 'hi'
	});
});


// Register routes
require('./routes')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});