'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('permission', {
            key: DataTypes.STRING,
            name: DataTypes.STRING,
            group: DataTypes.STRING,
            description: DataTypes.STRING
        },
        Object.assign(Configuration, {
            comment: '权限表',
            tableName: 'koa_permissions'
        })
    )
}