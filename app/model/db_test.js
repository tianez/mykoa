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
                allowNull: true
            },
            type: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            answer: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '[]'
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