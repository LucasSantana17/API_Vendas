require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) { console.error('Erro ao conectar ao banco de dados:', err)};
  console.log('Conexão bem-sucedida!');
});

module.exports = connection; 