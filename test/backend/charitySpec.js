var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../../server/server-config');

describe('Just Giving API Interface', function() {

  describe('Request Options', function () {
    it ('Sets headers to accept JSON data', function (done) {
      request(app)
      .get('/issues')
      .query({'country': 'Australia'})
      .expect(function (req) {
        expect('content-type', 'application/json');
      })
      .end(done);
    });
  });

  describe('Returned Response', function () {
    it ('Returns the logo formatted to be a valid url', function (done) {
      request(app)
      .get('/issues')
      .query({'country': 'Russia'})
      .expect(function (res) {
        var charityInfo = res.body.charities[0];
        var logo = (charityInfo.Logo).slice(0,6);
        expect(logo).to.equal('https:');
      })
      .end(done);
    });
    it('Returns the information for the correct country', function (done) {
      request(app)
      .get('/issues')
      .query({'country': 'China'})
      .expect(function (res) {
        var found = false;
        var titles = [];
        res.body.news.forEach(function (item) {
          if ((item.headline).indexOf('China') !== -1) {
            found = true;
          }
        });
        expect(found).to.equal(true);
      })
      .end(done);
    });
  });
});
