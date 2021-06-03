const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const helperUtils = require('../helpers/utils');
const should = chai.should();
chai.use(require("chai-sorted"));
chai.use(chaiHttp)

describe('/GET all user', () => {
    it('sort() by user name', () => {
        var data = helperUtils.sort(helperUtils.mockData());
        data.should.be.ascendingBy("name");
    });
    it('it should Get all users', (done) => {
        chai.request(app)
            .get('/api/v0/user')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.ascendingBy("name");
                done();
            });
    });
});