var ctrl = require('./controller.js');
var express = require('express');
var http = require('https');
var path = require('path');
var mongoose = require('mongoose');
var Image = require('./api/models/imageModel');
var bodyParser = require('body-parser');
var routes = require('./api/routes/imageRoutes');

var app = express();

mongoose.Promise = global.Promise;
var dburl = 'mongodb://admin:CGI54321@ds227858.mlab.com:27858/topimages';
mongoose.connect(dburl);

// Retrive images and save them to db
var imageData = ctrl.getImages();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

// Set view engine
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// Index page
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/search', function(req, res) {
  res.render('search');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
