const conexao = require('../Model/conexaoBanco')
const express = require('express');
const rts = express.Router();


rts.get('/Login',(req, res) => {
    const sql = 'SELECT nome, cpf FROM cliente WHERE nome = ? AND cpf = ?';

    let dados = {nome:'', cpf:''}; 
       
    dados = req.body;

    let nome = dados.nome;
    let cpf = dados.cpf;

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