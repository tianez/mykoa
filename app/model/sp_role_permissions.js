/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sp_role_permissions', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sp_role_permissions',
    timestamps: false
  });
};
