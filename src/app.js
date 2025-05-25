const express = require('express');
const app = express();
const sequelize = require('./database');

app.use(express.json());

//VAI COLAR AS CONSTANTES AQUI HO, DAQUI

const Diagnostico = require('./models/Diagnostico'); // garante que o modelo seja carregado
app.use('/diagnosticos', require('./routes/diagnosticos'));

const Responsavel = require('./models/Responsavel');
app.use('/responsaveis', require('./routes/responsaveis'));

const Atividade = require('./models/Atividade');
app.use('/atividades', require('./routes/atividades'));

const Crianca = require('./models/Crianca');
app.use('/criancas', require('./routes/criancas'));

const Progresso = require('./models/Progresso');
app.use('/progresso', require('./routes/progresso'));


//ATÉ AQUI PELO AMOR DE DEUS NÃO COLOCA NADA FORA

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
