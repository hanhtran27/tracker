import { DataAccess } from '../DataAccess';
import { app } from '../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

//Connect to database
DataAccess.connect();

chai.use(chaiHttp);

describe('Testing GET goals', () => {
  it('Should return a list of objects', (done) => {
    chai.request(app)
        .get('/goals')
        .end(function(err, res) {
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.length.above(1);
            chai.expect(res).to.satisfy (
                function (body) {
                    for (var i = 0; i < body.length; i++) {
                        chai.expect(body[i]).to.have.property('goalNumber');
					    chai.expect(body[i]).to.have.property('tag');
                        chai.expect(body[i]).to.have.property('userId');
                        chai.expect(body[i]).to.have.property('_id');
					    chai.expect(body[i]).to.have.property('goalName').that.is.a('string');
                    }
                    return true;
                });
            done();
        })
  });

  it('Should return a single object', (done) => {
    const goalId = '5ceeadfd0f7806983d70672c'
    chai.request(app)
        .get(`/goal/${goalId}`)
        .end(function(err, res) {
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.include.keys('goalName');
            chai.expect(res.body).to.include.keys('_id');
            chai.expect(res).to.be.json;
            chai.expect(res.body).to.have.property('tag').that.is.a('string');
            done();
        })
  });
})