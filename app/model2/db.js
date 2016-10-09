'use strict'

const Sequelize = require('sequelize');
const dbconfig = {
    host: 'localhost', // 主机名
    port: 3306, // 端口号，MySQL默认3306
    database: 'laravel2', // 使用哪个数据库
    username: 'root', // 用户名
    password: '123456', // 口令
}

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

let db = {}
module.exports = db = {
    User: sequelize.import("./myuser"),
    Article: sequelize.import("./article")
}

db.Article.sync({
    force: true
});
db.User.sync({
    force: true
}).then(create);

function create() {
    db.User.create({ username: 'John Doe', password: 'senior engine12121er2222' })
        .then(function(employee) {
            console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
            console.log(employee.get('title')); // SENIOR ENGINEER
            console.log(employee);
        })
}