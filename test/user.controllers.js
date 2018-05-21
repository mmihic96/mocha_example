const expect = require('chai').expect;
const path = require('path');
const rewire = require("rewire");


const rootDir = "../";
requireMocks();
describe("user.controllers.js", function () {
    beforeEach(function () {
        requireMocks();
    });


    let getAllUsers = test.__get__("getAllUsers");

    it("Should retrieve all users from db", function (done) {
        test.__set__("User", userMock);

        let returnValue = getAllUsers();    
        expect(typeof returnValue).to.be.equal("object");
        done();
    });
});

function requireMocks() {
    test = rewire(path.join(rootDir, 'lib', 'user.controllers.js'));
    userMock = require(path.join(rootDir, 'test', 'mocks', 'User.js')).getUserInstance();
}