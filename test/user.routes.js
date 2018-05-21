//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const path = require('path');
const rewire = require("rewire");
const chai = require('chai');
let chaiHttp = require('chai-http');
const app = require('../app');
const rootDir = "../";
const sequelize = require('../sequelize').getSequelizeInstance();

chai.use(chaiHttp);


requireMocks();
describe("user.routes.js", function () {
    beforeEach(function () {
        requireMocks();
    });
    after(function () {
        app.stop();
        sequelize.close();
        console.info('Server and database connection closed.');
    })

    it('Should GET all the users', (done) => {
        chai.request(app.app)
            .get('/api/user/all')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(typeof res.body).to.be.equal("object");
                expect(res.body.length).to.be.equal(1);
                expect(typeof res.body[0]).to.be.equal("object");
                expect(res.body[0].id).to.be.equal(1);
                expect(res.body[0].firstName).to.be.equal("Milos");
                expect(res.body[0].lastName).to.be.equal("Mihic");

                done();
            });
    });

    it('Should return status 404 if there is no result for that ID', (done) => {
        chai.request(app.app)
            .get('/api/user/1')
            .end((err, res) => {
                expect(res.status).to.be.equal(404);
                done();
            });
    });

});

function requireMocks() {
    test = rewire(path.join(rootDir, 'routes', 'user.routes.js'));
    userMock = require(path.join(rootDir, 'test', 'mocks', 'User.js')).getUserInstance();
}