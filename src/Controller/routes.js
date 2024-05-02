const express = require('express');
const gerenciador = express.Router();

gerenciador.get('/teste',(response) => {
   return response.statusMessage(200, 'deu certo')
});


module.exports = gerenciador;

