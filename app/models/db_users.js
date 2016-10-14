/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_users', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    realname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    china_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    head_img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    office_phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qq: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    score: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true
    },
    team: {
      type: DataTypes.STRING,
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    login_totals: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    reg_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0.0.0.0'
    },
    last_login_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0.0.0.0'
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'db_users'
  });
};
