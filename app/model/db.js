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
    },
    define: {
        classMethods: {
            json: function (data) {
                return JSON.parse(JSON.stringify(data))
            },
            method1: function () {
                return 'smth'
            }
        }
    }
});
sequelize.authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

let db
module.exports = db = {
    user: sequelize.import("./user"),
    role: sequelize.import("./role"),
    permission: sequelize.import("./permission"),
    user_role: sequelize.import("./user_role"),
    role_permission: sequelize.import("./role_permission"),
    field: sequelize.import("./field"),    
    article: sequelize.import("./article"),
    meun: sequelize.import("./meun"),
}


db.user.sync({
    force: true
}).then(create);

db.role.sync()
db.permission.sync()
db.user_role.sync()
db.role_permission.sync()
db.field.sync({
    force: true
});

db.article.sync({
    force: true
});
db.meun.sync()

function create() {
    db.user.create({
        username: 'John Do2e',
        password: 'senior engine12121er2222'
    })
}

// db.meun.findAll().then(function (users) {
//     // console.log(users.toJSON());
//     // console.log(users.method1());
//     users.forEach(function (user) {
//         // console.log(user.dataValues)
//             // console.log(user.getDataValue('username'))
//             // console.log(user.get('username'))
//             // console.log(user.get({
//             //     plain: true
//             // }).username)
//             // console.log(user.dataValues)
//             // console.log(user.get(username))
//     }, this);
// })

// db.user.findOne().then(function (user) {
//     // console.log(user.get('username'));
//     console.log(user.toJSON())
// });