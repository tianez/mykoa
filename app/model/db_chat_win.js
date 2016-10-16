'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_chat_win', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        phone: { 
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: '0'
        },
        operuser: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bz: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        djsj: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    Object.assign(Configuration, {
            comment: '中奖名单',
            tableName: 'db_chat_win'
        })
    )
};