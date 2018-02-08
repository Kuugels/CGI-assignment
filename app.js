var imgur = require('./getData');
var request = require('request');
var express = require('express');
var http = require('https');
var path = require('path');
var app = express();

// Set view engine
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// Get images from imgur
var options = {
  url: 'https://api.imgur.com/3/gallery/hot/viral/',
  headers: {
    Authorization: "Client-ID 1049ee991ed7d71",
  }
}

request(options, function(err, res, body) {
  if(err) {
    console.log(err);
    return
  }
  //console.log(JSON.parse(body));
})

// Index page
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/search', function(req, res) {
  res.render('search');
})

app.listen(8080);
console.log('Listening port 8080...');
