var Q = require('q');

var userInstance = null;

class User {
    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.allUsers = null;
    }

    findAll() {
        var deferred = Q.defer();
        deferred.resolve(this.allUsers);
        return deferred.promise;

    }

    setUsers(users) {
        this.allUsers = users;
    }

    removeUsers() {
        this.allUsers = null;
    }
}

function getUserInstance() {
    if (!userInstance) {
        userInstance = new User();
    }
    return userInstance;
}

module.exports.getUserInstance = getUserInstance;