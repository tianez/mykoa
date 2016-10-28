'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_topic', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        win: {
            type: DataTypes.TEXT,
            allowNull: true
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
        }
    }, Object.assign(Configuration, {
        comment: '直播主题',
        tableName: 'db_topic'
    }))
}