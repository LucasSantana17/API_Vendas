const express = require('express');
const rou_tela = express.Router();
const path = require('path');
//const {fileURLToPath} = require('url');


//const __filename = fileURLToPath(import.meta.url);
//const __dirname =  path.dirname(__filename);


rou_tela.use(express.static(path.join(__dirname, 'view')));


rou_tela.get('/inicio', (req, res) => {
    const filePath = path.join(__dirname,'../view/inicio.html')

    res.sendFile(filePath, 'utf-8',(err, result) => {
        if(err){
        res.status(500).send({msg:'Pagina não encontrada!'});
        console.log(`Erro no roteamento ${err}`);
        }
        console.log('Pagina encontrada')
    })
});


module.exports = rou_tela;