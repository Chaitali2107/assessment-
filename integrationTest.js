const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Items', () => {
  beforeEach(done => {
    // Clear the database before each test
    require('../models/itemModel').deleteMany({}, () => {
      done();
    });
  });

  describe('/GET items', () => {
    it('it should GET all the items', done => {
      chai
        .request(server)
        .get('/api/items')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
