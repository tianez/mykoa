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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    module: {
      type: DataTypes.STRING,
      allowNull: true
    },
    group: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default: {
      type: DataTypes.STRING,
      allowNull: true
    },
    add: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '[1]'
    },
    edit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '[1]'
    },
    visible: {
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
