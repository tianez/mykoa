'use strict'

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_role_user', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true
        }
    }, {
        timestamps: false,
        tableName: 'db_role_user'
    })
}