const expect = require('chai').expect
const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('test_get', () => {  
  it('should be ok', () => {
    chai.request(server)    
    .get('/')    
    .end(function (err, res) {       
      expect(err).to.be.null;       
      expect(res).to.have.status(200);    
    });  
  })});

describe('test_post', () => {  
  it('should be ok', () => {
    chai.request(server)    
    .post('/siemka')    
    .end(function (err, res) {       
      expect(err).to.be.null;       
      expect(res).to.have.status(200);
      expect(res).to.be.html;
    });  
  })});

describe('test_put', () => {  
  it('should be ok', () => {
    chai.request(server)    
    .post('/czesc')    
    .end(function (err, res) {       
      expect(err).to.be.null;       
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });  
  })});

describe('test_delete', () => {  
  it('should be ok', () => {
    chai.request(server)    
    .post('/witam')    
    .end(function (err, res) {       
      expect(err).to.be.null;       
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });  
  })});