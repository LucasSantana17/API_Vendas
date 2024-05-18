const express = require('express');
const banco = require('../Model/conexaoBanco');
const rots = express.Router();

rots.get('/teste', (req, rep, next) => {
   return rep.status(200).send({msg:'DEUS é bom, o tempo todo'});
});

rots.get('/user',(request, response) => {
   const SQL = 'select * from cliente';

   banco.query(SQL, (err, result) => {
      if(err){
         response.status(500).json({msg:'erro ao consultar'});
      }else{
         response.status(200).json(result);
         console.log('Consulta feita com sucesso')
      }
   })
});

rots.post('/cadastro', (req, rep)=>{

   const sql = 'INSERT INTO cliente (nome, CPF, email) VALUES (?, ?, ?)';

   let nome = req.body.nome;
   let cpf = req.body.CPF;
   let email = req.body.email;

   if(nome=='' || cpf=='' || email==''){
      rep.status(500).send({msg:'Cadastro invalido, tente novamente!'});
      rep.end();
   }

   banco.query(sql, [nome, cpf, email], (err, result) => {
      if(err){
         console.log('Erro ao cadastrar'+ err);
         rep.status(500).send({msg:'Cadastro não realizado'});
      }else{  
         rep.status(200).json(result);
         console.log(`Cadastro realizado com sucesso! ${nome, cpf, email} `)
      }
    });

});

rots.delete('/delete',(request, response) => {
   const id = request.body.id;

   const SQL = 'DELETE FROM cliente WHERE id = ?';

   banco.query(SQL, id, (err, result) => {
      if(err){ 
         response.status(500).json({msg:'Erro ao deletar cadastro'+ err});
      }
      response.status(200).json({msg:'Deleção realizada'});
      console.log('deleção feita com sucesso!');
   });
});

module.exports = rots;