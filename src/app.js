const express = require('express');
const app = express();
const sequelize = require('./database');

app.use(express.json());

const Diagnostico = require('./models/Diagnostico');
app.use('/diagnosticos', require('./routes/diagnosticos'));

const Atividade = require('./models/Atividade');
app.use('/atividades', require('./routes/atividades'));


app.get('/', (req, res) => {
  res.send('🚀 API está funcionando!');
});

// Conexão com banco
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexão com o PostgreSQL estabelecida!');
    return sequelize.sync();
  })
  .then(() => console.log('📦 Tabelas sincronizadas com sucesso!'))
  .catch(err => console.error('❌ Erro ao conectar ao banco:', err));

module.exports = app;
