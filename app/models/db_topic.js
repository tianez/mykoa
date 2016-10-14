'use strict'
let Configuration = require('../model/Configuration')

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
            comment: '直播评论表',
            tableName: 'db_topic'
        })
    )
}