'use strict'

let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_test', {
            id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            type: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            answer: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '0'
            }
        },
        Object.assign(Configuration, {
            comment: '题目表',
            tableName: 'db_test'
        })
    )
}