'use strict';
const sequelize = require('../sequelize').getSequelizeInstance();
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

module.exports = User;