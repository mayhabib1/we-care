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
  });
});

