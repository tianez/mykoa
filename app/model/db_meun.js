'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_meun', {
            id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            link: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            roles: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: '[1]'
            },
            order: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: '0'
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '0'
            },
            created_at: {
                type: DataTypes.TIME,
                allowNull: true
            },
            updated_at: {
                type: DataTypes.TIME,
                allowNull: true
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