const conexao = require('../Model/conexaoBanco')
const express = require('express');
const rts = express.Router();

rts.post('/Login',(req, res) => {
    const sql = 'SELECT nome, cpf FROM cliente WHERE nome = ? AND cpf = ?';

    console.log(req.body)

    let nome = req.body.nome;
    let cpf = req.body.senha

    console.log(nome);
    console.log(cpf);

    conexao.query(sql,[nome,cpf],(err,result) => {
        if(err){
            res.status(500).send({msg:'Usuário inexistente'})
            console.log('Usuário não Localizado'+err);
        }
            res.status(200).send(result)
            console.log('Usuário localizado')
    })
});

module.exports = rts;