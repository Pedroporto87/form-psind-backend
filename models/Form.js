// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  crp: { type: String, required: true },
  cidade: { type: String, required: true },
  situacao: { type: String, required: true },
  areaAtuacao: { type: String, required: true },
  especificarAreaAtuacao: { type: String },
  regimeTrabalho: { type: String, required: true },
  nomeEmpresa: { type: [String] }, // Array de strings
  orgaoEfetivo: { type: [String] }, // Array de strings
  orgaoTemporario: { type: [String] }, // Array de strings
  prestacaoServico: { type: [String] }, // Array de strings
  terceirizadoEmpresa: { type: String },
  cooperativaNome: { type: [String] },
  outrosRegime: { type: [String] },
  sugestoes: { type: String, required: true }
});

module.exports = mongoose.model('Form', formSchema);