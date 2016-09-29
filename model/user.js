var Sequelize = require('sequelize');

var sequelize = new Sequelize('laravel2', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var User = sequelize.define('db_users', {
    user_name: Sequelize.STRING,
    password: Sequelize.STRING
});