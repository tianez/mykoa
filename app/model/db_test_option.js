'use strict'

let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_test_option', {
            id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            test_id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
            },
            content: {
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
            comment: '题目选项表',
            tableName: 'db_test_option'
        })
    )
}