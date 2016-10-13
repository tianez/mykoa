'use strict'
let Configuration = require('./Configuration')

const cryptopassword = require('../middleware/password');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
            // uuid: {
            //     type: DataTypes.UUID,
            //     unique: true,
            //     defaultValue: DataTypes.UUIDV1
            // },
            username: {
                type: DataTypes.STRING,
                unique: true
            },
            head_img: {
                type: DataTypes.STRING
            },
            real_name: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING,
                set: function (val) {
                    this.setDataValue('password', cryptopassword(val));
                }
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            status: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    min: -1,
                    max: 10
                }
            },
            // version: DataTypes.BIGINT
        },
        Object.assign(Configuration, {
            comment: '用户表',
            tableName: 'db_users',
            paranoid: false
        })
    )
}