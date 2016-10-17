'use strict'
let Configuration = require('./Configuration')

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('db_role_permission', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true
        },
        permission_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true
        }
    }, {
        comment: '用户组权限',
        tableName: 'db_role_permission',
        timestamps: false,
    });
};