'use strict'

const Sequelize = require('sequelize');
const dbconfig = {
    host: 'localhost', // 主机名
    port: 3306, // 端口号，MySQL默认3306
    database: 'koa', // 使用哪个数据库
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
    user: sequelize.import("./db_users"),
    roles: sequelize.import("./db_roles"),
    permissions: sequelize.import("./db_permissions"),
    user_role: sequelize.import("./user_role"),
    role_permission: sequelize.import("./role_permission"),
    fields: sequelize.import("./db_fields"),
    meun: sequelize.import("./db_meun"),
    meuns: sequelize.import("./db_meun"),
    chat: sequelize.import("./db_chat"),
    topic: sequelize.import("./db_topic"),
    config: sequelize.import("./db_config"),
    chat_win: sequelize.import("./db_chat_win"),
    article: sequelize.import("./db_article"),
    category: sequelize.import("./db_category"),

}


// db.user.sync({
//     force: true
// }).then(create);

// db.user.sync()
// db.permission.sync()
// db.user_role.sync()
// db.role_permission.sync()
// db.field.sync({
//     force: true
// });

// db.article.sync({
//     force: true
// });
// db.meun.sync()

// function create() {
//     db.user.create({
//         username: 'John Do2e',
//         password: 'senior engine12121er2222'
//     })
// }