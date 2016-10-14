/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_jobs', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    queue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attempts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    reserved_at: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    available_at: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    created_at: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'db_jobs'
  });
};
