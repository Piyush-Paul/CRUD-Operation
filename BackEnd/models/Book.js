const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalQuantity: {
    type: DataTypes.INTEGER,
  },
  availableQuantity: {
    type: DataTypes.INTEGER,
  },
  publishedYear: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Book;