var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);
var chaiReq = chai.request("mongodb://localhost:27017/")

describe('Items', function() {

  it('should post to db successfully', function(){   
        chaiReq.post('/items')
        .send({
            'itemId':2736,
            'text':'hello Test',
            'status':'todo'
        })
        .end(function(err, res){
         res.should.have.message('Item saved successfully!');
          done();
        });
      });
  it('should have response status 200', function(){   
    chaiReq.get('/items')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
  it('should have a jason response', function(){   
    chaiReq.get('/items')
    .end(function(err, res){
     res.should.be.json;
      done();
    });
  });
  it('should return a single record from db', function(){   
    chaiReq.get('/items')
    .send({
        'itemId':2736
    })
    .end(function(err, res){
     res.should.be.lengthOf(1);
      done();
    });
  });
  it('should update a record from db', function(){   
    chaiReq.put('/items')
    .send({
        'itemId':2736,
        'text':'Hello Update',
        'status':'inProgress'
    })
    .end(function(err, res){
     res.should.have.success(true);
      done();
    });
  });
  it('should delete a record from db', function(){   
    chaiReq.delete('/items')
    .send({
        'itemId':2736
    })
    .end(function(err, res){
     res.should.have.success(true);
      done();
    });
  });
  it('should register a user successfully', function(){   
    chaiReq.post('/register')
    .send({
        'email':'test@gmail.com',
        'username':'test',
        'password':'test',
        'password2':'test'
    })
    .end(function(err, res){
     res.should.have.success(true);
      done();
    });
  });
});