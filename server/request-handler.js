var request = require('request-promise');
var _ = require('lodash'); 
// Access API keys 
var keys = require('./keys');
// Access country data
var CountryData = require('../db/CountryData');

// Initialize Reddit API wrapper for simpler querying 
var Snoocore = require('snoocore'); 
var reddit = new Snoocore({
  userAgent: '/u/wecare_app WeCare@1.0.0', // unique string identifying the app
  oauth: {
    type: 'implicit',
    key: keys.top_reddit,  
    redirectUri: 'http://localhost:3000',
    scope: ['read'],
    deviceId: 'DO_NOT_TRACK_THIS_DEVICE'
  }
});

module.exports.requestTopNYT = function (top_nyt) {
  return request(top_nyt)
  .then(function(body) {
    body = JSON.parse(body);
    var articleArray = body.results.slice(0, 10);
    return articleArray.map(function(article) {
      var location = []; 
      if (typeof article.geo_facet === "string") { article.geo_facet = [] }; 
      article.geo_facet.forEach(function(loc) {
        var country = _.find(CountryData, function(co) {
          // Filters for capital cities or country name 
          if (co.capital === loc || co.name.common === loc) {
            return true; 
          }
        });
        if (country && location.length < 1) { location.push(country.name.common) }; 
      }); 
      return {
        source: "NYT", 
        headline: article.title,
        url: article.url,
        location: location
      }
    })
  })
  .catch(function(error) {
    res.send(error);
  });
};

module.exports.requestTopReddit = function () {
  return reddit('/r/worldnews/top').listing({
    limit: 10
  })
  .then(function(slice) {
    var articleArray = slice.children; 
    return articleArray.map(function(article) {
      // Extract country name from article headline
      var splitTitle = article.data.title.split(' ');
      var location = []; 
      splitTitle.forEach(function(word) {
        var country = _.find(CountryData, function(co) {
          // Filters for denonym or country name. Denonym example: Russian for Russia, Italian for Italy
          if (co.demonym === word || co.name.common === word || co.capital === word) {
            return true; 
          }    
        }); 
        if (country && location.length < 1) { location.push(country.name.common) }; 
      }); 
      return {
        source: "Reddit",
        headline: article.data.title,
        url: article.data.url,
        location: location
      }
    })
  })
  .catch(function(error) {
    res.send(error); 
  });
};

module.exports.formatDate = function () {
  var today = new Date();
  var day = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  var todaysDate = "" + year + month + day;
  return todaysDate;
};

// NYT API
module.exports.requestNY = function (nyt_url) {
  return request(nyt_url)
  .then(function(body) {
    body = JSON.parse(body);
    var articles = body.response.docs;

    return articles.map(function(article) {
      return {
        headline: article.headline.main,
        url: article.web_url
      };
    });
  });
}; 

// JustGiving API
module.exports.requestGiving = function (options) {
  return request(options)
  .then(function(body) {
    body = JSON.parse(body);
    var indexes = body.GroupedResults; 
    // Extract Charities object from GroupedResults array
    var charities; 
    indexes.forEach(function(index) {
      if (index.Title === "Charities") {
        charities = index.Results; 
        charities.forEach(function(charity) {
          charity.Logo = "https:" + charity.Logo;
        }); 
      }
    });
    return charities; 
  });  
}; 

// Get country's flag
module.exports.getFlag = function (country) {
  var country = country.replace(/"/g, "");
  var code = _.find(CountryData, function(co) {
    if (co.name.common === country) { return true; };     
  }); 
  if (code) {
    code = code.cca2.toString().toLowerCase();
    return code + ".png";
  }    
};


