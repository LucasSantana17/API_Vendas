const express = require('express');
const banco = require('../Model/conexaoBanco');
const rots = express.Router();

rots.get('/teste', (req, rep, next) => {
   return rep.status(200).send({msg:'DEUS é bom, o tempo todo'});
});

//Cadastro no banco 
rots.post('/cadastro', (request, response) => { 
      const {nome, CPF, email} = request.body;

      const SQL = 'INSERT INTO cliente (nome, CPF, email) VALUES (?,?,?)';

      banco.query(SQL, [nome, CPF, email], (err) => {
         if(err){
            console.log('erro ao cadastrar', err)
            response.status(500).json(
               {msg:'Falha ao cadastrar'});
         }else{
            console.log('cadastro criado com sucesso');
            response.status(200).json({
               msg:'Cadastro realizado com sucesso!!'})
         }
      });

});

module.exports = rots;