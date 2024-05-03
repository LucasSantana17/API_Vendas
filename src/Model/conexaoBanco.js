const mysql = require('mysql');
require('dotenv').config()

const conexaoBemSucedida =_=>(console.log('Conexão feita com sucesso!'));

const conex_banco = mysql.createConnection({
    HOST:process.env.HOST,
    USE:process.env.USE,
    PASSWORD:process.env.PASSWORD,
    NAME:process.env.NAME
}, conexaoBemSucedida());

module.exports = conex_banco;