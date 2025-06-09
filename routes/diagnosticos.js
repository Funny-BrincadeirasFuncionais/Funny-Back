const express = require('express');
const router = express.Router();
const Diagnostico = require('../models/Diagnostico');

// GET /diagnosticos - listar todos
router.get('/', async (req, res) => {
  const lista = await Diagnostico.findAll();
  res.json(lista);
});

// GET /diagnosticos/:id - buscar por ID
router.get('/:id', async (req, res) => {
  const item = await Diagnostico.findByPk(req.params.id);
  item ? res.json(item) : res.status(404).json({ erro: 'Não encontrado' });
});

// POST /diagnosticos - criar novo
router.post('/', async (req, res) => {
  const novo = await Diagnostico.create(req.body);
  res.status(201).json(novo);
});

// PUT /diagnosticos/:id - atualizar
router.put('/:id', async (req, res) => {
  const item = await Diagnostico.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.update(req.body);
  res.json(item);
});

// DELETE /diagnosticos/:id - deletar
router.delete('/:id', async (req, res) => {
  const item = await Diagnostico.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.destroy();
  res.status(204).send();
});

module.exports = router;
