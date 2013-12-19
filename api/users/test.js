
var request = require('supertest');
var api = require('../..');

describe('GET /stats', function(){
  it('should respond with stats', function(done){
    var app = api();

    request(app.listen())
    .get('/stats')
    .expect({
      requests: 100000,
      average_duration: 52,
      uptime: 123123132
    })
    .end(done);
  })
})

describe('GET /stats/:name', function(){
  it('should respond with a single stat', function(done){
    var app = api();

    request(app.listen())
    .get('/stats/requests')
    .expect('100000', done);
  })
})