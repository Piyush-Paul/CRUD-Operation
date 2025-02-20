const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');


const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roll: {
    type: DataTypes.INTEGER,
    //autoIncrement: true,
    primaryKey: true,
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Student;
