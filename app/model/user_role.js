'use strict'

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_role_user', {
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true
        },
        role_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true
        }
    }, {
        tableName: 'db_role_user'
    })
}