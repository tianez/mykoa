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

let db = {
    config: sequelize.import("./db_config"),
    users: sequelize.import("./db_users"),
    roles: sequelize.import("./db_roles"),
    role_user: sequelize.import("./role_user"),
    permissions: sequelize.import("./db_permissions"),
    role_permission: sequelize.import("./role_permission"),
    role_permissions: sequelize.import("./sp_role_permissions"),
    fields: sequelize.import("./db_fields"),
    meuns: sequelize.import("./db_meun"),
    topic: sequelize.import("./db_topic"),
    chat: sequelize.import("./db_chat"),
    chat_win: sequelize.import("./db_chat_win"),
    article: sequelize.import("./db_article"),
    category: sequelize.import("./db_category"),
}

db.sync = function () {
    let option = {
        force: true
    }
    db.config.sync(option)
    db.user.sync(option)
    db.roles.sync(option).then(function () {
        db.roles.bulkCreate(require('../data/role'))
    })
    db.user_role.sync(option)
    db.permissions.sync(option)
    db.role_permission.sync(option)
    db.fields.sync(option)
    db.meun.sync(option)
    db.topic.sync(option)
    db.chat.sync(option)
    db.chat_win.sync(option)
    db.article.sync(option)
    db.category.sync(option)
}

module.exports = db