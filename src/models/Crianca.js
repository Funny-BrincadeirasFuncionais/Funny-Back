const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Responsavel = require('./Responsavel');
const Diagnostico = require('./Diagnostico');

const Crianca = sequelize.define('Crianca', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Relacionamentos
Crianca.belongsTo(Responsavel, { foreignKey: 'responsavelId' });
Crianca.belongsTo(Diagnostico, { foreignKey: 'diagnosticoId' });

module.exports = Crianca;
