'use strict'
let Configuration = require('./Configuration')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_config', {
            id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            value: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '0'
            }
        },
        Object.assign(Configuration, {
            comment: '系统设置表',
            tableName: 'db_config'
        })
    )
}