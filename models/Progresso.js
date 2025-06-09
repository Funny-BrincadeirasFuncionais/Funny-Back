const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Crianca = require('./Crianca');
const Atividade = require('./Atividade');

const Progresso = sequelize.define('Progresso', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pontuacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Relacionamentos N:1
Progresso.belongsTo(Crianca, { foreignKey: 'criancaId' });
Progresso.belongsTo(Atividade, { foreignKey: 'atividadeId' });

module.exports = Progresso;
