/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_role_permission', {
    role_id: {
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
    tableName: 'db_role_permission'
  });
};
