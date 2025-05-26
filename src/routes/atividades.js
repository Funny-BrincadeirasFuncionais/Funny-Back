const express = require('express');
const router = express.Router();
const Atividade = require('../models/Atividade');

// GET /atividades
router.get('/', async (req, res) => {
  const lista = await Atividade.findAll();
  res.json(lista);
});

// GET /atividades/:id
router.get('/:id', async (req, res) => {
  const item = await Atividade.findByPk(req.params.id);
  item ? res.json(item) : res.status(404).json({ erro: 'Não encontrado' });
});

// POST /atividades
router.post('/', async (req, res) => {
  const nova = await Atividade.create(req.body);
  res.status(201).json(nova);
});

// PUT /atividades/:id
router.put('/:id', async (req, res) => {
  const item = await Atividade.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.update(req.body);
  res.json(item);
});

// DELETE /atividades/:id
router.delete('/:id', async (req, res) => {
  const item = await Atividade.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.destroy();
  res.status(204).send();
});

module.exports = router;
