const express = require('express');
const router = express.Router();
const Responsavel = require('../models/Responsavel');

// GET /responsaveis
router.get('/', async (req, res) => {
  const lista = await Responsavel.findAll();
  res.json(lista);
});

// GET /responsaveis/:id
router.get('/:id', async (req, res) => {
  const item = await Responsavel.findByPk(req.params.id);
  item ? res.json(item) : res.status(404).json({ erro: 'Não encontrado' });
});

// POST /responsaveis
router.post('/', async (req, res) => {
  const novo = await Responsavel.create(req.body);
  res.status(201).json(novo);
});

// PUT /responsaveis/:id
router.put('/:id', async (req, res) => {
  const item = await Responsavel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.update(req.body);
  res.json(item);
});

// DELETE /responsaveis/:id
router.delete('/:id', async (req, res) => {
  const item = await Responsavel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ erro: 'Não encontrado' });
  await item.destroy();
  res.status(204).send();
});

module.exports = router;
