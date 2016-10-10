'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
            uuid: {
                type: DataTypes.UUID,
                unique: true,
                defaultValue: DataTypes.UUIDV1
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                set: function (val) {
                    this.setDataValue('username', val.toUpperCase());
                }
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            password: DataTypes.STRING,
            status: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    min: -1,
                    max: 10
                }
            },
            version: DataTypes.BIGINT
        },
        Object.assign(Configuration, {
            comment: '用户表',
            tableName: 'koa_users',
            getterMethods: {
                fullName: function () {
                    return this.username + ' ' + this.password
                }
            }
        })
    )
}