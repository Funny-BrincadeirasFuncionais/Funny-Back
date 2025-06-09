const express = require('express');
const router = express.Router();
const Progresso = require('../models/Progresso');
const Crianca = require('../models/Crianca');
const Atividade = require('../models/Atividade');

// POST /progresso/registrar
router.post('/registrar', async (req, res) => {
  const novo = await Progresso.create(req.body);
  res.status(201).json(novo);
});

// GET /progresso/crianca/:id
router.get('/crianca/:id', async (req, res) => {
  const lista = await Progresso.findAll({
    where: { criancaId: req.params.id },
    include: [Atividade]
  });
  res.json(lista);
});

// GET /progresso/atividade/:id
router.get('/atividade/:id', async (req, res) => {
  const lista = await Progresso.findAll({
    where: { atividadeId: req.params.id },
    include: [Crianca]
  });
  res.json(lista);
});

// GET /progresso/crianca/:id/resumo
router.get('/crianca/:id/resumo', async (req, res) => {
  const lista = await Progresso.findAll({
    where: { criancaId: req.params.id }
  });

  const total = lista.length;
  const concluidas = lista.filter(p => p.concluida).length;
  const media = lista.reduce((acc, p) => acc + p.pontuacao, 0) / (total || 1);

  res.json({ total, concluidas, mediaPontuacao: media });
});

module.exports = router;
