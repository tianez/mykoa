'use strict'

let Configuration = require('./Configuration')

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('koa_article', {
            username: {
                type: DataTypes.STRING,
                unique: true,
                set: function(val) {
                    this.setDataValue('username', val.toUpperCase());
                }
            },
            version: DataTypes.BIGINT
        },
        Object.assign(Configuration, {
            comment: '文章表',
            tableName: 'koa_articles'
        })
    )
}