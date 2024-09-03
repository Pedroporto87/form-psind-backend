// routes/forms.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController.js');

// Rota para criar um novo formulário (POST)
router.post('/', formController.createForm);

// Rota para obter todos os formulários (GET)
router.get('/', formController.getForms);

// Rota para obter um formulário específico por ID (GET)
router.get('/:id', formController.getFormById);

// Rota para atualizar um formulário por ID (PUT)
router.put('/:id', formController.updateForm);

// Rota para deletar um formulário por ID (DELETE)
router.delete('/:id', formController.deleteForm);

module.exports = router;