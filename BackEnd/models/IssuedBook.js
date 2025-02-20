const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database')

const IssuedBook = sequelize.define('IssuedBook', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    bookId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
       }
    },
    studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Students',
          key: 'roll',
       }
    }
})

module.exports = IssuedBook;