
var EventEmitter = require('events').EventEmitter
  , request = require('../..')
  , express = require('express')
  , assert = require('better-assert')
  , app = express()
  , url = require('url')
  , https = require('https')
  , fs = require('fs')
  , ca = fs.readFileSync(__dirname + '/fixtures/ca.cert.pem')
  , key = fs.readFileSync(__dirname + '/fixtures/key.pem')
  , cert = fs.readFileSync(__dirname + '/fixtures/cert.pem')
  , server;



app.get('/', function(req, res){
  res.send('Safe and secure!');
});



// WARNING: this .listen() boilerplate is slightly different from most tests
// due to HTTPS. Do not copy/paste without examination.
var base = 'https://localhost';
var testEndpoint;



describe('https', function(){
  describe('certificate authority', function() {
    before(function listen(done) {
      server = https.createServer({
        key: key,
        cert: cert
      }, app);
      server.listen(0, function listening() {
        testEndpoint = base + ':' + server.address().port;
        done();
      })
    })

    after(function() {
      server.close()
    })

    describe('request', function(){
      it('should give a good response', function(done){
        request
        .get(testEndpoint)
        .ca(ca)
        .end(function(err, res){
          assert(res.ok);
          assert('Safe and secure!' === res.text);
          done();
        })
      })
    })

    describe('.agent', function () {
      it('should be able to make multiple requests without redefining the certificate', function(done){
        var agent = request.agent({ca: ca});
        agent
        .get(testEndpoint)
        .end(function(err, res){
          assert(res.ok);
          assert('Safe and secure!' === res.text);
          agent
          .get(url.parse(testEndpoint))
          .end(function(err, res){
            assert(res.ok);
            assert('Safe and secure!' === res.text);
            done();
          })
        })
      })
    })
  })


  describe('client certificates', function() {
    before(function listen(done) {
      server = https.createServer({
        ca: ca,
        key: key,
        cert: cert,
        requestCert: true,
        rejectUnauthorized: true
      }, app);
      server.listen(0, function listening() {
        testEndpoint = base + ':' + server.address().port;
        done();
      })
    })

    after(function() {
      server.close()
    })

    describe('request', function(){
      it('should give a good response with client certificates and CA', function(done){
        request
        .get(testEndpoint)
        .ca(ca)
        .key(key)
        .cert(cert)
        .end(function(err, res){
          assert(res.ok);
          assert('Safe and secure!' === res.text);
          done();
        })
      })
    })

    describe('.agent', function () {
      it('should be able to make multiple requests without redefining the certificates', function(done){
        var agent = request.agent({ca: ca, key: key, cert: cert});
        agent
        .get(testEndpoint)
        .end(function(err, res){
          assert(res.ok);
          assert('Safe and secure!' === res.text);
          agent
          .get(url.parse(testEndpoint))
          .end(function(err, res){
            assert(res.ok);
            assert('Safe and secure!' === res.text);
            done();
          })
        })
      })
    })
  })
})
