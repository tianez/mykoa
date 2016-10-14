/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_article_taxonomy', {
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'db_article_taxonomy'
  });
};
