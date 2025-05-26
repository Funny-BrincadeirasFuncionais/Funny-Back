const express = require('express');
const router = express.Router();
const Crianca = require('../models/Crianca');
const Responsavel = require('../models/Responsavel');
const Diagnostico = require('../models/Diagnostico');

// GET /criancas
router.get('/', async (req, res) => {
  const lista = await Crianca.findAll({
    include: [Responsavel, Diagnostico]
  });
  res.json(lista);
});

// GET /criancas/:id
router.get('/:id', async (req, res) => {
  const item = await Crianca.findByPk(req.params.id, {
    include: [Responsavel, Diagnostico]
  });
  item ? res.json(item) : res.status(404).json({ erro: 'Não encontrado' });
});

// POST /criancas
router.post('/', async (req, res) => {
  const nova = await Crianca.create(req.body);
  res.status(201).json(nova);
});

// PUT /criancas/:id
router.put('/:id', async (req, res) => {
  const item = await Crianca.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.update(req.body);
  res.json(item);
});

// DELETE /criancas/:id
router.delete('/:id', async (req, res) => {
  const item = await Crianca.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.destroy();
  res.status(204).send();
});

module.exports = router;
