'use strict'
let Configuration = require('./Configuration')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_article_category', {
            id: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ico: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            pid: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: '0'
            },
            taxonomy: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'category'
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '0'
            }
        },
        Object.assign(Configuration, {
            comment: '分类表',
            tableName: 'db_article_category'
        })
    )
}