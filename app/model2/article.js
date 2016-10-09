'use strict'

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('koa_article', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            // field: 'username'
            set: function(val) {
                this.setDataValue('username', val.toUpperCase());
            },
            get: function() {
                var title = this.getDataValue('username');
                // 'this' allows you to access attributes of the instance
                return this.getDataValue('name') + ' (' + title + ')';
            },
        },
        password: DataTypes.STRING,
        version: DataTypes.BIGINT,
        deadline: DataTypes.DATE
    }, {
        comment: '用户表',
        // 添加时间戳属性 (updatedAt, createdAt)
        timestamps: true,
        // 不使用驼峰式命令规则，这样会在使用下划线分隔
        // 这样 updatedAt 的字段名会是 updated_at
        underscored: true,
        // 不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
        // paranoid 属性只在启用 timestamps 时适用
        paranoid: true,
        getterMethods: {
            fullName: function() {
                return this.username + ' ' + this.password
            }
        },
        hooks: {
            beforeValidate: function(obj) {
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
}