// MODULES ====================================

// Load Express & Utility Libraries 
var express = require('express');
var Q = require('q'); 
var bodyParser = require('body-parser');

// Initalize Mongo connection
var db = require('../db/config.js');
var Query = require('../db/query');
// Access API keys 
var keys = require('./keys');

var requestHandler = require('./request-handler');

// CONFIG CODE =================================
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
// Mount flag image middleware 
app.use('/flags', express.static(__dirname + '/../db/flags-normal'));

// Query DB for data on world map warnings
app.get('/warnings', function(req, res) {
  Query.Country.find().exec(function(err, warnings) {
    if (err) return console.error(err);
    res.json(warnings);
  });
});

// Returns NYT Top News
app.get('/top', function(req, res) {

  var top_nyt = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + keys.top_nyt;

  // Q Sends multiple requests asynchronously 
  Q.all([
    requestHandler.requestTopNYT(top_nyt),
    requestHandler.requestTopReddit()
  ])
  .spread(function(newsNYT, newsReddit) {
    var topArray = newsNYT.concat(newsReddit); 
    res.send(topArray); 
  })
  .catch(function(error) {
    console.log(error); 
  })
  .done();
});

// Returns results of NYT & JustGiving country name query
app.get('/issues', function(req, res) {
  var todaysDate = requestHandler.formatDate();

  var nyt_url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.query.country + '&fq=section_name:("Front Page" "Global Home" "International Home" "NYT Now" "Today\'s Headlines" "Topics" "World")&begin_date=' + todaysDate + '&api-key=' + keys.query_nyt;
  var giving_url = 'https://api.justgiving.com/{' + keys.just_giving + '}/v1/onesearch?q={' + req.query.country + '}';
  var options = {
    url: giving_url,
    headers: {
      'Accept': 'application/json'
    }
  };

  Q.all([
    requestHandler.requestNY(nyt_url),
    requestHandler.requestGiving(options),
    requestHandler.getFlag(req.query.country)
  ])
  .spread(function(news, charities, flag) {
    res.send({
      news: news,
      charities: charities,
      flag: flag
    })
  })
  .catch(function(error) {
    console.log(error); 
  })
  .done(); 
});

module.exports = app;
