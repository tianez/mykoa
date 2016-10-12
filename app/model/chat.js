'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('chat', {
            username: DataTypes.STRING,
            user_id: DataTypes.STRING,
            head_img: DataTypes.STRING,
            time: DataTypes.STRING,
            content: DataTypes.STRING
        },
        Object.assign(Configuration, {
            comment: '直播评论表',
            tableName: 'db_chat'
        })
    )
}