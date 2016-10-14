'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('field', {
            key: DataTypes.STRING,
            name: DataTypes.STRING,
            type: DataTypes.STRING,
            module: DataTypes.STRING,
            group: DataTypes.STRING,
            description: DataTypes.STRING,
            default: DataTypes.STRING,
            options: DataTypes.STRING,
            ext: DataTypes.STRING,
            add: {
                type: DataTypes.STRING,
                defaultValue: '[1]',
            },
            edit: {
                type: DataTypes.STRING,
                defaultValue: '[1]',
            },
            visible: {
                type: DataTypes.STRING,
                defaultValue: '[1]',
            },
            order: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
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
            comment: '字段表',
            tableName: 'db_fields'
        })
    )
}