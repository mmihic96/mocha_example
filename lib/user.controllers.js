const User = require('../model/User');

function getAllUsers(cb) {
    return User.findAll();
}


module.exports.getAllUsers = getAllUsers;