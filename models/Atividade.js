const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Atividade = sequelize.define('Atividade', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nivelDificuldade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Atividade;
