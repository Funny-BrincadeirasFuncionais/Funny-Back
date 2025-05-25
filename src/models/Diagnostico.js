const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Diagnostico = sequelize.define('Diagnostico', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Diagnostico;
