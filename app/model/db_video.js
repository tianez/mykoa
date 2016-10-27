'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_video', {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true
            },
            poster: {
                type: DataTypes.STRING,
                allowNull: true
            },
            type: {
                type: DataTypes.INTEGER(4),
                allowNull: true,
                defaultValue: '0'
            },
            order: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                defaultValue: '0'
            },
            status: {
                type: DataTypes.INTEGER(4),
                allowNull: true,
                defaultValue: '0'
            }
        },
        Object.assign(Configuration, {
            comment: '直播节目',
            tableName: 'db_video',
            paranoid: false
        })
    )
}