const Sequelize = require('sequelize');
const config = require('./config/db.config.json');

var sequelize = null

if (!module.exports) {
    module.exports = {};
}

function getSequelizeInstance() {
    if (!sequelize) {
        sequelize = new Sequelize(config.db_name, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            operatorsAliases: config.operatorsAliases,
            pool: config.pool
        });

        sequelize.authenticate().then(() => {
            console.log('Connection as been established successfully');
        }).catch((err) => {
            console.log(`Unable to connect to the database: ${err}`)
        });
    }
    return sequelize;
}
module.exports.getSequelizeInstance = getSequelizeInstance;