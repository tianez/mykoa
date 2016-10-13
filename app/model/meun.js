'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('meun', {
            link: {
                type: DataTypes.STRING,
                unique: true
            },
            title: DataTypes.STRING,
            icon: DataTypes.STRING,
            description: DataTypes.STRING,
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
            comment: '菜单表',
            tableName: 'db_meun',
            paranoid: false,
            scopes: {
                id: {
                    where: {
                        id: 1
                    }
                }
            }
        })
    )
}