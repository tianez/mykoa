/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_article_meta', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    meta_key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meta_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'db_article_meta'
  });
};
