const express = require('express');
const app = express();
const cors = require('cors')

const conex_DB = require('../Model/conexaoBanco');
const routes = require('./routes');

app.conex_DB;

app.use(cors());

app.use(routes);

module.exports = app;
