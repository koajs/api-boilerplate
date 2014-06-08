
var request = require('supertest');
var api = require('../..');

describe('GET /users', function(){
  it('should respond with users', function(done){
    var app = api();

    request(app.listen())
    .get('/users')
    .end(function(err, res){
      if (err) return done(err);
      Object.keys(res.body).should.eql(['tobi', 'loki', 'jane']);
      done();
    });
  })
  it('should respond with users/:id', function(done){
    var app = api();

    request(app.listen())
    .get('/users/jane')
    .end(function(err, res){
      if (err) return done(err);
      Object.keys(res.body).should.eql(['name', 'age', 'species']);
      done();
    });
  })
})
