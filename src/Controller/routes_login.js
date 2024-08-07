const conexao = require('../Model/conexaoBanco');
const express = require('express');
const rts = express.Router();

rts.post('/Login', (req, res) => {
    const sql = 'SELECT nome, cli_senha FROM cliente WHERE nome = ? AND cli_senha = ?';

    let nome = req.body.nome;
    let senha = req.body.senha;

    conexao.query(sql, [nome, senha], (err, result) => {
        if (err) {
            console.log('Erro no servidor:', err);
            return res.status(500).send({ msg: 'Erro no servidor' });
        } else if (result.length === 0) {
            console.log('Usuário ou senha incorretos');
            return res.status(401).send({ msg: 'Usuário ou senha incorretos' });
        } else {
            console.log('Usuário localizado:', result[0]);
            return res.status(200).send({
                success: true,
                message: 'Login bem-sucedido',
                user: result[0] 
            });
        }
    });
});

module.exports = rts;
