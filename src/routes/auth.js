const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const JWT_SECRET = 'segredo_super_secreto'; // Pode mover pro .env depois

// POST /auth/register
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  const existente = await Usuario.findOne({ where: { email } });
  if (existente) {
    return res.status(400).json({ erro: 'Email já cadastrado' });
  }

  const senhaHash = await bcrypt.hash(senha, 10);
  const novo = await Usuario.create({ nome, email, senhaHash });

  res.status(201).json({ id: novo.id, nome: novo.nome, email: novo.email });
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
  if (!senhaValida) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
    expiresIn: '2h'
  });

  res.json({ token });
});

module.exports = router;
