const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());


app.use(cors(corsOptions));

// Verificar se a URI do MongoDB está definida
const mongoUri = process.env.MONGOURI;
if (!mongoUri) {
  throw new Error('A URI do MongoDB não está definida. Verifique o arquivo .env.');
}

// Conectar ao MongoDB Atlas
mongoose.connect(mongoUri)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

// Middleware para servir arquivos estáticos (se necessário)
app.use(express.static('public'));

// Definir rotas
const formsRouter = require('./routes/form'); // Certifique-se de que o caminho está correto
app.use('/api/forms', formsRouter);

// Middleware para lidar com erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000; // Mudando a porta para 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});