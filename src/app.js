const express = require('express');
const app = express();
const sequelize = require('./database');

app.use(express.json());

const Diagnostico = require('./models/Diagnostico'); // garante que o modelo seja carregado
app.use('/diagnosticos', require('./routes/diagnosticos'));


// Teste de rota
app.get('/', (req, res) => {
  res.send('🚀 API está funcionando!');
});

// Conexão com banco
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexão com o PostgreSQL estabelecida!');
    // Criar tabelas se não existirem
    return sequelize.sync(); // por padrão: { force: false }
  })
  .then(() => console.log('📦 Tabelas sincronizadas com sucesso!'))
  .catch(err => console.error('❌ Erro ao conectar ao banco:', err));

module.exports = app;
