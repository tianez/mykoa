'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role', {
            key: DataTypes.STRING,
            name: DataTypes.STRING,
            thumb: DataTypes.STRING,
            description: DataTypes.STRING,
            status: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    min: -1,
                    max: 10
                }
            }
        },
        Object.assign(Configuration, {
            comment: '用户组',
            tableName: 'koa_roles'
        })
    )
}