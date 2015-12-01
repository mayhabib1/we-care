var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../../server/server-config');
var requestHandler = require('../../server/request-handler');
var keys = require('../../server/keys');


describe('Request Handler', function() {

  describe('requestTopNYT', function() {
    it('Returns an array of news objects', function (done) {
      var top_nyt = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + keys.top_nyt;
      requestHandler.requestTopNYT(top_nyt)
      .then(function (result) {
        expect(Array.isArray(result)).to.equal(true);
        expect(typeof result[0]).to.equal('object');
        done();
      });
    });
    it ('Returns objects with a source, headline, url and location', function (done) {
      var top_nyt = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + keys.top_nyt;
      requestHandler.requestTopNYT(top_nyt)
      .then(function (result) {
        var firstItem = result[0];
        expect(firstItem).to.have.keys('source', 'headline', 'url', 'location');
        done();
      });
    });
    it ('Limits the results to 10 news items', function (done) {
      var top_nyt = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + keys.top_nyt;
      requestHandler.requestTopNYT(top_nyt)
      .then(function (result) {
        expect(result.length).to.equal(10);
        done();
      });
    });
  });

  describe('requestTopReddit', function () {
    it('Returns an array of news objects', function (done) {
      requestHandler.requestTopReddit()
      .then(function (result) {
        expect(Array.isArray(result)).to.equal(true);
        expect(typeof result[0]).to.equal('object');
        done();
      });
    });
    it ('Returns objects with a source, headline, url and location', function (done) {
      requestHandler.requestTopReddit()
      .then(function (result) {
        var firstItem = result[0];
        expect(firstItem).to.have.keys('source', 'headline', 'url', 'location');
        done();
      });
    });
    it ('Limits the results to 10 news items', function (done) {
      requestHandler.requestTopReddit()
      .then(function (result) {
        expect(result.length).to.equal(10);
        done();
      });
    });
  });

  describe('formatDate', function() {
    it('Returns todays date in the format YYYYMMDD', function (done) {
      var todaysDate = requestHandler.formatDate();
      var year = todaysDate.substring(0,4);
      var month = todaysDate.substring(4,6);
      var day = todaysDate.substring(6);
      var test = new Date();
      expect(test.getDate()).to.equal(parseInt(day));
      expect(test.getFullYear()).to.equal(parseInt(year));
      expect(test.getUTCMonth()).to.equal(parseInt(month));
      done();
    });
  });

  describe('requestNY', function () {
    it('Returns an array of news objects', function (done) {
      var country = 'China';
      var todaysDate = requestHandler.formatDate();
      var nyt_url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + country + '&fq=section_name:("Front Page" "Global Home" "International Home" "NYT Now" "Today\'s Headlines" "Topics" "World")&begin_date=' + todaysDate + '&api-key=' + keys.query_nyt;
      requestHandler.requestNY(nyt_url)
      .then(function (result) {
        expect(Array.isArray(result)).to.equal(true);
        expect(typeof result[0]).to.equal('object');
        done();
      });
    });
    it ('Returns objects with a source, headline, url and location', function (done) {
      var country = 'China';
      var todaysDate = requestHandler.formatDate();
      var nyt_url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + country + '&fq=section_name:("Front Page" "Global Home" "International Home" "NYT Now" "Today\'s Headlines" "Topics" "World")&begin_date=' + todaysDate + '&api-key=' + keys.query_nyt;
      requestHandler.requestNY(nyt_url)
      .then(function (result) {
        var firstItem = result[0];
        expect(firstItem).to.have.keys('headline', 'url');
        done();
      });
    });
  });
});

