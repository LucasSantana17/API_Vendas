const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');

const conex_DB = require('../Model/conexaoBanco');
const routes = require('./routes');

app.conex_DB;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(routes);

module.exports = app;
