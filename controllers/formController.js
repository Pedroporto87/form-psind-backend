// controllers/formController.js
const Form = require('../models/Form.js');

// Criar um novo formulário (POST)
exports.createForm = async (req, res) => {
  try {
    const { nome, email, crp } = req.body;

    // Verificar se o formulário já existe
    const existingForm = await Form.findOne({ nome, email, crp });
    if (existingForm) {
      return res.status(400).send({ message: 'Formulário já enviado anteriormente.' });
    }

    // Criar um novo formulário
    const form = new Form(req.body);
    await form.save();
    res.status(201).send(form);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obter todos os formulários (GET)
exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).send(forms);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obter um formulário específico por ID (GET)
exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).send();
    }
    res.status(200).send(form);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualizar um formulário por ID (PUT)
exports.updateForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!form) {
      return res.status(404).send();
    }
    res.status(200).send(form);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deletar um formulário por ID (DELETE)
exports.deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) {
      return res.status(404).send();
    }
    res.status(200).send(form);
  } catch (error) {
    res.status(500).send(error);
  }
};