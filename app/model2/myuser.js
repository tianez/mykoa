'use strict'
let Configuration = require('./Configuration')

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('koa_users', {
            username: {
                type: DataTypes.STRING,
                unique: true,
                set: function(val) {
                    this.setDataValue('username', val.toUpperCase());
                }
            },
            password: DataTypes.STRING,
            version: DataTypes.BIGINT
        },
        Object.assign(Configuration, {
            comment: '用户表',
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
        })
    )
}