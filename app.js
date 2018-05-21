const express = require('express');
const sequelize = require('./sequelize').getSequelizeInstance(); // connect on database when server start
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const config = require('config');

var app = express();
var server = http.Server(app);

app.use(bodyParser.json());

app.use('/api', require('./routes/user.routes'));

if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

server.listen(3000, '0.0.0.0', function () {
    console.info('Express listen on *:3000');
});


module.exports.app = app;
module.exports.stop = ()=>{server.close()};