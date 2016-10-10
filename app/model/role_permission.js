'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role_permission', {
            role_id: DataTypes.INTEGER,
            permission_id: DataTypes.INTEGER
        },
        Object.assign(Configuration, {
            comment: '用户组权限',
            tableName: 'koa_role_permission'
        })
    )
}