const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

// Rota para a página HTML do chat
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para recuperar as mensagens do banco de dados
app.get('/messages', (req, res) => {
  connection.query('SELECT * FROM messages', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao recuperar mensagens.' });
    }

    res.json(results);
  });
});

// Rota para adicionar uma nova mensagem ao banco de dados
app.post('/messages', express.json(), (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: 'A mensagem não pode estar vazia.' });
  }

  connection.query('INSERT INTO messages (message) VALUES (?)', [message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
    }

    res.json({ message: 'Mensagem salva com sucesso.' });
  });
});

// Rota para limpar o chat (apagar todas as mensagens do banco de dados)
app.delete('/messages', (req, res) => {
  connection.query('DELETE FROM messages', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao limpar o chat.' });
    }

    res.json({ message: 'Chat limpo com sucesso.' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
