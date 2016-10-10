'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_role', {
            user_id: DataTypes.INTEGER,
            role_id: DataTypes.INTEGER
        },
        Object.assign(Configuration, {
            comment: '用户与用户组关系表',
            tableName: 'koa_user_role'
        })
    )
}