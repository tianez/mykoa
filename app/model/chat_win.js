'use strict'

let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('chat_win', {
            phone: {
                type: DataTypes.STRING
            },
            upuid: DataTypes.INTEGER,
            status: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    min: -1,
                    max: 10
                }
            }
        },
        Object.assign(Configuration, {
            comment: '中奖名单',
            tableName: 'db_chat_win'
        })
    )
}