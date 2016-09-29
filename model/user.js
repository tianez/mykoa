var Sequelize = require('sequelize');

const dbconfig = {
    host: 'localhost', // 主机名
    port: 3306, // 端口号，MySQL默认3306
    database: 'laravel2', // 使用哪个数据库
    username: 'root', // 用户名
    password: '123456', // 口令
}

var sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var User = sequelize.define('db_users22', {
    user_name: Sequelize.STRING,
    password: Sequelize.STRING,
    version: Sequelize.BIGINT
}, {
    timestamps: true,
    hooks: {
        beforeValidate: function (obj) {
            let now = Date.now();
            if (!obj.id) {
                obj.createdAt = now;
                obj.updatedAt = now;
                obj.version = 0;
            } else {
                obj.updatedAt = now;
                obj.version++;
            }
        }
    }
});

module.exports = User