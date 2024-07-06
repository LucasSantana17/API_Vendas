const express = require('express');
const formulario = express.Router();
const path = require('path');
const login = require('./routes_login');


formulario.get('/', (req, res) => {
    const filePath = path.join(__dirname,'../view/login.html')

    res.sendFile(filePath, 'utf-8',(err, result) => {
        if(err){
        res.status(500).send({msg:'Pagina não encontrada!'});
        console.log(`Erro no roteamento ${err}`);
        }
        console.log('Pagina encontrada');

    })
});

formulario.get('/home', (req, res) => {
    const filePath = path.join(__dirname,'../view/home.html')

    res.sendFile(filePath, 'utf-8',(err, result) =>{
        if(err){
            res.status.send({msg:'Um erro inesperado aconteceu'});
            console.log('Erro no roteamento'+ err);
        }
        console.log('home encontrada');
    })
})


module.exports = formulario;