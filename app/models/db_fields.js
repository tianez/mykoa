/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_fields', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    f_module: {
      type: DataTypes.STRING,
      allowNull: true
    },
    f_groups: {
      type: DataTypes.STRING,
      allowNull: true
    },
    f_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    f_options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    f_ext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    f_default: {
      type: DataTypes.STRING,
      allowNull: true
    },
    f_add: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '[1]'
    },
    f_edit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '[1]'
    },
    f_visible: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '[1]'
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'db_fields'
  });
};
