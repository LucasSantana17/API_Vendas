const express = require('express');
const gerenciador = express.Router();

gerenciador.get('/teste', (req, rep, next) => {
   return rep.status(200).send({msg:'DEUS é bom, o tempo todo'});
});

module.exports = gerenciador;


