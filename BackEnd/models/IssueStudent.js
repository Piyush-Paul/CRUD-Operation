const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const IssueStudent  = sequelize.define('IssueStudent', {
  roll: {
    type: DataTypes.INTEGER,
    //autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = IssueStudent;
