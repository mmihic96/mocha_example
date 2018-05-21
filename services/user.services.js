
const lib = require('../lib/user.controllers');

function getAllUsers(req, res) {
    lib.getAllUsers().then(users=>{
        res.status(200).send(users);
    })
}

module.exports.getAllUsers = getAllUsers;