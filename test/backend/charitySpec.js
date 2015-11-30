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
      .expect(function )
    });
  });
});
    // country code should match req.body.country code

 //  describe('GET /warnings', function() {
 //    it('Sends travel warnings for each country for get requests to /warnings', function (done) {
 //      request(app)
 //        .get('/warnings')
 //        .expect(200)
 //        .expect(function (res) {
 //          var sample = res.body[0];
 //          expect(sample).to.be.an('object');
 //          expect(sample).to.include.keys('name', 'advisoryState', 'hasAdvisory', 'advisoryText');
 //        })
 //        .end(done);
 //    });
 //  });

 // describe('GET /issues', function (){
 //  it('should return an object with a flag and an array of news and charities', function (done){
 //    request(app)
 //      .get('/issues')
 //      .query({'country': 'Australia'})
 //      .expect(function (res) {
 //        expect(res.body).to.be.an('object');
 //        expect(res.body).to.include.keys('news', 'charities', 'flag');
 //      })
 //      .end(done);
 //    });
 //  });
