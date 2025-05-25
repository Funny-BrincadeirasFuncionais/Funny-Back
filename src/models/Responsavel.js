const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Responsavel = sequelize.define('Responsavel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Responsavel;
