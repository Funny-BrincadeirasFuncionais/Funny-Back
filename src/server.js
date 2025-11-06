require('dotenv').config();
const http = require('http'); 
const app = require('./app'); 

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

// --- INÍCIO DA MITIGAÇÃO SLOWLORIS ---
const TIMEOUT_MS = 10000; // 10 segundos

server.headersTimeout = TIMEOUT_MS; 
server.requestTimeout = TIMEOUT_MS; 
server.setTimeout(TIMEOUT_MS);
// --- FIM DA MITIGAÇÃO SLOWLORIS ---

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

---

Qualquer um dos dois métodos contém o código correto. Faça o *deploy* para o Vercel e me diga se o teste de validação deu certo!
