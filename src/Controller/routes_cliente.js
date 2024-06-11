const express = require('express');
const banco = require('../Model/conexaoBanco');
const rots = express.Router();
const system = require('./Sistema/systemdados');



rots.get('/teste', (req, rep, next) => {
   return rep.status(200).send({msg:'DEUS é bom, o tempo todo'});
});


//Criando um cadastro no banco
rots.post('/cadastro', (req, rep, next)=>{

   const sql = 'INSERT INTO cliente (nome, CPF, email) VALUES (?, ?, ?)';

   let nome = req.body.nome; console.log(nome)
   let cpf = req.body.cpf;       console.log(cpf)
   let email = req.body.email; console.log(email)

   if(nome=='' || cpf=='' || email==''){
      rep.status(500).send({msg:'Cadastro invalido, tente novamente!'});
      rep.end();
   }
   if(cpf == null){
      rep.status(500).send({msg:'CPF obrigatório'});
      rep.end();
   }

   banco.query(sql, [nome, cpf, email], (err) => {
      if(err){
         console.log('Erro ao cadastrar'+ err);
         console.log(err)
         rep.status(500).send({msg:'Cadastro não realizado'});
      }else{  
         rep.status(200).json({msg:`Cadastro realizado com sucesso! ${nome, cpf, email}`});
         console.log(`Cadastro realizado com sucesso! ${nome, cpf, email} `)
      }
    });
});


// Busca de todos os cadastro no banco
rots.get('/user',(req, rep, next) => {
   const SQL = 'select * from cliente';

   banco.query(SQL, (err, result) => {
      if(err){
         rep.status(500).json({msg:'erro ao consultar'});
      }else{
         rep.status(200).json(result);
         console.log('Consulta feita com sucesso')
      }
   })
});


// Busca por id 
rots.get('/busca', (req, res) => {
   

   const sql = 'SELECT * FROM cliente WHERE id_cliente = ?';

   const id = req.body.id;

   console.log({id});

   banco.query(sql, [id], (err, result) => {

         if(err){
            res.status(500).send({msg:'Erro ao buscar'});
            console.log('Erro ao buscar usuário!'+ err);
         }else{
            const sys = new system(res, result);
            res = sys.dados(result);
         }   
   });
});


rots.get('/buscaNome', (req, rep)=>{

   const sql = 'SELECT * FROM cliente WHERE nome = ?';

   let {nome} = req.body;

    banco.query(sql, [nome], (err, result) => {
      if(err){
         rep.status(500).send({msg:'Erro ao procurar'});
         console.log('erro ao buscar'+ err)
      }else{
         rep.status(200).send(result);
       }
    });
})

//Deleção de um registro dentro do banco 
rots.delete('/delete',(request, response) => {

   const id = request.body.id;

   const SQL = 'DELETE FROM cliente WHERE id_cliente = ?';

   banco.query(SQL, id, (err, result) => {
      if(err){ 
         response.status(500).json({msg:'Erro ao deletar cadastro'+ err});
      }
      response.status(200).json({msg:'Deleção realizada'});
      console.log('deleção feita com sucesso!');
   });
});



module.exports = rots;