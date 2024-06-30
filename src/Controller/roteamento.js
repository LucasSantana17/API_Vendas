const express = require('express');
const rou_tela = express.Router();
const path = require('path');

//rou_tela.use(express.static(path.join(__dirname, 'view')));

rou_tela.get('/', (req, res) => {
    const filePath = path.join(__dirname,'../view/home.html')

    res.sendFile(filePath, 'utf-8',(err, result) => {
        if(err){
        res.status(500).send({msg:'Pagina não encontrada!'});
        console.log(`Erro no roteamento ${err}`);
        }
        console.log('Pagina encontrada');

    })
});


module.exports = rou_tela;