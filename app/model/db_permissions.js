'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_permissions', {
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
            module: {
                type: DataTypes.STRING,
                allowNull: true
            },
            action: {
                type: DataTypes.STRING,
                allowNull: true
            },
            display_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            group: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '0'
            }
        },
        Object.assign(Configuration, {
            comment: '权限表',
            tableName: 'db_permissions'
        })
    )
}