/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_migrations', {
    migration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'db_migrations'
  });
};
