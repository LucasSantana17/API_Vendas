const express = require('express');
const routs = express.Router();
const banco = require('../Model/conexaoBanco');


routs.post('/pedido', (req, res) => {

    const id_cliente = parseInt(req.body.id_cliente);
    const id_produto = parseInt(req.body.id_produto);
    const quantidade = parseInt(req.body.quantidade);

    banco.query('SELECT estoque_disponivel FROM produtos WHERE id_produto = 1'
        , [id_produto, quantidade], (err, result) => {
            if (err) {
                res.status(500).json({ msg: 'Erro ao consultar quantidade' });
                console.log(`Erro ao consultar quantidade ${err}`);
            }

            if (result.length === 0 || result[0].estoque_disponivel < quantidade) {
                res.status(200).send({ msg: 'Produto com quantidade insuficiente' })
                console('Quantidade indisponivel');
            }
            console.log('Consulta ao estoque feita com sucesso');
            const produto_atual = result[0].estoque_disponivel - quantidade;



            banco.query('UPDATE produtos SET estoque_disponivel = ? WHERE id_produto = ?',
                [produto_atual, id_produto], (err) => {
                    if (err) {
                        res.status(500).json({ msg: 'Erro na atualização do estoque' });
                        console.log('Erro de atualização' + err);
                    } else {
                        console.log('Pedido Atualizado com sucesso')
                    }
                }
            )
            banco.query(
                `INSERT INTO pedido(id_cliente, id_produto, quantidade_produto) VALUES(
                 (SELECT id_cliente FROM cliente WHERE id_cliente = ?),
                (SELECT id_produto FROM produtos WHERE id_produto = ?), 
             ? );` , [id_cliente, id_produto, quantidade], (err) => {
                if (err) {
                    res.status(500).json({ msg: 'Aconteceu um erro inesperado ;( ' });
                    console.log('Erro na solicitação de pedido' + err)
                } else {
                    console.log('Pedido realizado com sucesso')
                }
            }
            )

            res.status(200).send({msg:'Pedido realizado com sucesso'})
        });    
});



module.exports = routs;

